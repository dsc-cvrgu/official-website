import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import NavBar from './NavBar'
import { firestore, storage } from 'firebase/app'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import $ from 'jquery'
export const AddEvent = () => {
    return (
        <div>
            <ToastProvider>
                <NavBar />
                <Header name='Add Event' />
                <section id="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                            <li className="breadcrumb-item active">Add Event</li>
                        </ol>
                    </div>
                </section>
                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Dashboard />
                            </div>
                            <div className="col-md-9">
                                {/* <!-- Website Overview --> */}
                                <div className="card">
                                    <div className="card-header main-color-bg">
                                        <h5 className="card-title mb-0">Add Event</h5>
                                    </div>
                                    <EventForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer id="footer">
                    <p>Copyright DSC CVRGU &copy; 2020</p>
                </footer>
            </ToastProvider>
        </div>
    )
}

export const EventForm = () => {
    const { addToast } = useToasts()
    const [eventDetails, setEventDetails] = useState({
        EventTitle: "",
        EventId: "",
        EventLink: "",
        EventLocation: "",
        EventDescription: "",
        EventPoster: "",
        EventHost: "",
        EventParticipants: [],
        EventStatus: "upcoming",
        From: "",
        To: "",
    });

    const handleChange = name => e => {
        setEventDetails({ ...eventDetails, [name]: e.target.value });
    }
    const saveImg = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        if (!file.type.match('image.*')) {
            addToast('Only select images you FOOL', { appearance: 'error', autoDismiss: true });
        } else {
            storage().ref(file.name).put(file).then(fileSnapshot => {
                return fileSnapshot.ref.getDownloadURL().then(url => setEventDetails({ ...eventDetails, EventPoster: url }));
            }).catch(err => {
                addToast(err.message_, { appearance: 'error', autoDismiss: true });
            })
        }
    }
    const handleSubmit = () => {
        if (eventDetails.EventId === '') {
            return addToast("EventId can't be empty", { appearance: 'error', autoDismiss: true });
        }
        $('#submit').html('Adding...').addClass('disabled');
        firestore().collection("Events").doc(eventDetails.EventId).set(eventDetails)
            .then(() => {
                $('#submit').html('Saving...').addClass('disabled');
                addToast("Event added successfully", { appearance: 'success', autoDismiss: true });
                setEventDetails({
                    ...eventDetails,
                    EventDescription: "",
                    EventLink: "",
                    EventLocation: "",
                    EventPoster: "",
                    EventTitle: "",
                    Status: "",
                    EventHost: "",
                    Participants: [],
                    From: "",
                    To: "",
                    EventId: ""
                });
                $('input').val('');
                return $('#submit').html('Submit').removeClass('disabled');
            })
            .catch((err) => {
                $('#submit').html('Submit').removeClass('disabled');
                addToast(err.message, { appearance: 'error', autoDismiss: true });
                $('input').val('');
            });
    }
    return (
        <div className="card-body px-3 py-3 py-sm-4 px-md-4">
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Event Poster</td>
                        <td><input type="file" placeholder="Drop an Image" accept="image/*" onChange={saveImg} style={{ width: "100%" }} /></td>
                    </tr>
                    <tr>
                        <td>Event Title </td>
                        <td><input type="text" placeholder="Event Title" onChange={handleChange('EventTitle')} /></td>
                    </tr>
                    <tr>
                        <td>Event Id </td>
                        <td><input type="text" placeholder="Event ID" onChange={handleChange('EventId')} /></td>
                    </tr>
                    <tr>
                        <td>Event Link </td>
                        <td><input type="url" placeholder="Event Url" onChange={handleChange('EventLink')} /></td>
                    </tr>
                    <tr>
                        <td>Event Location </td>
                        <td><input type="text" placeholder="Event Location" onChange={handleChange('EventLocation')} /></td>
                    </tr>
                    <tr>
                        <td>From</td>
                        <td><input type="datetime-local" onChange={handleChange('From')} /></td>
                    </tr>
                    <tr>
                        <td>To </td>
                        <td><input type="datetime-local" onChange={handleChange('To')} /></td>
                    </tr>
                    <tr>
                        <td>Event Description</td>
                        <td><textarea type="text" cols="26" placeholder="Event Description" onChange={handleChange('EventDescription')} ></textarea></td>
                    </tr>
                    <tr>
                        <td>Event Host</td>
                        <td><input type="text" placeholder="Host Name" onChange={handleChange('EventHost')} /></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-danger btn-block mt-3" id="submit" type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}