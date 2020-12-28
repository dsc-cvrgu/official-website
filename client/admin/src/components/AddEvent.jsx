import React, { useState, useEffect } from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import NavBar from './NavBar'
import { storage } from 'firebase/app'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { Form, Button, Spinner } from 'react-bootstrap'
import { db } from './Firebase'
export const AddEvent = () => {
    useEffect(() => {
        document.title = "Admin | Add Event";
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <ToastProvider>
                <NavBar />
                <Header name='Add Event' />
                <section id="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
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
                    <p>&copy; 2020 Developer Student Clubs CVRGU</p>
                </footer>
            </ToastProvider>
        </div>
    )
}

export const EventForm = () => {
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState('');
    const [eventDetails, setEventDetails] = useState({
        EventTitle: "",
        // EventId: "",
        EventLink: "",
        EventLocation: "",
        EventDescription: "",
        EventHost: "",
        EventStatus: "",
        From: "",
        To: ""
    });

    const handleChange = name => e => {
        setEventDetails({ ...eventDetails, [name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(eventDetails);
        // let myDate = eventDetails.From.split('T')[0];
        // myDate = myDate.split("-");
        // let newDate = new Date(myDate[0], myDate[1] - 1, myDate[2]);
        // let timestamp = newDate.getTime();

        if (!file.type.match('image.*')) {
            setLoading(false);
            return addToast('Select only images', { appearance: 'warning', autoDismiss: true });
        } else {
            let uploadTask = storage().ref(file.name).put(file);
            uploadTask.on('state_changed', function (snapshot) {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById('progress').innerHTML = Math.ceil(progress) + ' %';
            }, function (err) {
                document.getElementById('progress').innerHTML = "";
                setLoading(false);
                return addToast(err.message, { appearance: 'error', autoDismiss: true });
            }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(async function (URL) {
                    try {
                        await db.collection("Events").add({
                            EventTitle: eventDetails.EventTitle,
                            // EventId: eventDetails.EventId,
                            EventLink: eventDetails.EventLink,
                            EventLocation: eventDetails.EventLocation,
                            EventDescription: eventDetails.EventDescription,
                            EventPoster: URL,
                            EventHost: eventDetails.EventHost,
                            EventParticipants: [],
                            EventStatus: eventDetails.EventStatus,
                            From: eventDetails.From,
                            To: eventDetails.To,
                            timestamp: eventDetails.From
                        }).then(() => {
                            addToast("Event added successfully", { appearance: 'success', autoDismiss: true });
                            setEventDetails({
                                ...eventDetails,
                                EventDescription: "",
                                EventLink: "",
                                EventLocation: "",
                                EventTitle: "",
                                EventStatus: "",
                                EventHost: "",
                                From: "",
                                To: "",
                            });
                            return setLoading(false);
                        });
                    } catch (err) {
                        addToast(err.message, { appearance: 'error', autoDismiss: true });
                        return setLoading(false);
                    }
                })
            });
        }
    }

    return (
        <div className="card-body px-3 py-3 py-sm-4 px-md-4">
            <form onSubmit={handleSubmit}>
                <table className="table table-striped table-hover">
                    <tbody>
                        <tr>
                            <td>Event Poster</td>
                            <td><input type="file" placeholder="Drop an Image" accept="image/*" onChange={e => setFile(e.target.files[0])} required /><span id='progress' className='ml-3'></span></td>
                        </tr>
                        <tr>
                            <td>Event Title </td>
                            <td><input type="text" className='form-control' placeholder="Event Title" onChange={handleChange('EventTitle')} required /></td>
                        </tr>
                        {/* <tr>
                            <td>Event Id </td>
                            <td><input type="text" className='form-control' placeholder="Event ID" onChange={handleChange('EventId')} required /></td>
                        </tr> */}
                        <tr>
                            <td>Event Link </td>
                            <td><input type="text" className='form-control' placeholder="Event Url" onChange={handleChange('EventLink')} /></td>
                        </tr>
                        <tr>
                            <td>Event Location </td>
                            <td><input type="text" className='form-control' placeholder="Event Location" onChange={handleChange('EventLocation')} /></td>
                        </tr>
                        <tr>
                            <td>From</td>
                            <td><input type="datetime-local" className='form-control' onChange={handleChange('From')} required /></td>
                        </tr>
                        <tr>
                            <td>To </td>
                            <td><input type="datetime-local" className='form-control' onChange={handleChange('To')} required /></td>
                        </tr>
                        <tr>
                            <td>Event Description</td>
                            <td><textarea type="text" className='form-control' rows="6" placeholder="Event Description" onChange={handleChange('EventDescription')} ></textarea></td>
                        </tr>
                        <tr>
                            <td>Event Host</td>
                            <td><input type="text" className='form-control' placeholder="Host Name" onChange={handleChange('EventHost')} /></td>
                        </tr>
                        <tr>
                            <td>Event Status</td>
                            <td>
                                <Form.Control as='select' onChange={handleChange('EventStatus')} required>
                                    <option value="">Choose..</option>
                                    <option value="past">Past</option>
                                    <option value="upcoming">Upcoming</option>
                                </Form.Control>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {
                    loading ?
                        <Button className="btn main-color-bg btn-block mt-3" disabled><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /><span className='ml-2'>Adding...</span></Button> :
                        <button className="btn main-color-bg btn-block mt-3" type='submit'>Add</button>
                }
            </form>
        </div>
    )
}