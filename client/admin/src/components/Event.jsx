import React, { useState, useEffect } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import { firestore, storage } from 'firebase/app'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { TableContainer, TableBody, TableCell, TableHead, TableRow, Table } from '@material-ui/core'
import { Form, Button, Spinner } from 'react-bootstrap'
import { db } from './Firebase'

export const Event = (props) => {
    useEffect(() => {
        document.title = `Admin | ${props.match.params.id}`;
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
                        <div className="card">
                            <div className="card-header main-color-bg">
                                <h5 className="card-title mb-0">Edit Event</h5>
                            </div>
                            <EventForm id={props.match.params.id} />
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

export const EventForm = (props) => {
    const [eventDetails, setEventDetails] = useState({
        EventDescription: "",
        EventLink: "",
        EventLocation: "",
        EventPoster: "",
        EventTitle: "",
        EventStatus: "",
        EventHost: "",
        From: "",
        To: "",
        // EventId: ""
    });
    const [file, setFile] = useState('');
    let [loading, setLoading] = useState(false);
    let [deleting, setDeleting] = useState(false);

    useEffect(() => {
        firestore().collection('Events').doc(props.id).get().then(doc => {
            setEventDetails(doc.data());
        }).catch(err => console.log(err));
    }, []);

    const { addToast } = useToasts()

    const handleChange = name => e => {
        setEventDetails({ ...eventDetails, [name]: e.target.value });
    }

    const updateData = async () => {
        try {
            await firestore().collection("Events").doc(props.id).update({
                EventTitle: eventDetails.EventTitle,
                EventLink: eventDetails.EventLink,
                EventLocation: eventDetails.EventLocation,
                EventDescription: eventDetails.EventDescription,
                EventPoster: eventDetails.EventPoster,
                EventHost: eventDetails.EventHost,
                EventStatus: eventDetails.EventStatus,
                From: eventDetails.From,
                To: eventDetails.To,
            }).then(() => {
                setLoading(false);
                addToast("Event updated successfully", { appearance: 'success', autoDismiss: true });
            });

        } catch (err) {
            setLoading(false);
            return addToast(err.message, { appearance: 'error', autoDismiss: true });
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(eventDetails);
        setLoading(true);
        if (file === "") {
            updateData();
        } else {
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
                    uploadTask.snapshot.ref.getDownloadURL().then(function (URL) {
                        eventDetails.EventPoster = URL;
                        updateData();
                    })
                })
            }
        }
    }

    const deleteEvent = (e) => {
        e.preventDefault();
        setDeleting(true);
        db.collection('Events').doc(props.id).delete().then(() => {
            setDeleting(false);
            window.location.href = '/events';
            return addToast("Event deleted successfully", { appearance: 'success', autoDismiss: true });
        }).catch(err => {
            setDeleting(false);
            return addToast(err.message, { appearance: 'error', autoDismiss: true });
        });
    }
    return (
        <div className="card-body px-3 py-3 py-sm-4 px-md-4">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <img src={eventDetails.EventPoster} className='img-fluid' alt={eventDetails.EventId} />
                    </div>
                </div>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Event Poster</TableCell>
                                <TableCell><input type="file" placeholder="Drop an Image" accept="image/*" onChange={e => setFile(e.target.files[0])} /><span id="progress"></span></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Event Title</TableCell>
                                <TableCell><input type="text" className='form-control' placeholder="Event Title" value={eventDetails.EventTitle} onChange={handleChange('EventTitle')} required /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Event Id</TableCell>
                                <TableCell><input type="text" className='form-control' placeholder="Event ID" value={props.id} readOnly /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Event Link</TableCell>
                                <TableCell><input type="text" className='form-control' placeholder="Event Url" value={eventDetails.EventLink} onChange={handleChange('EventLink')} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Event Location</TableCell>
                                <TableCell><input type="text" className='form-control' placeholder="Event Location" value={eventDetails.EventLocation} onChange={handleChange('EventLocation')} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>From</TableCell>
                                <TableCell><input type="datetime-local" className='form-control' value={eventDetails.From} onChange={handleChange('From')} required /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>To</TableCell>
                                <TableCell><input type="datetime-local" className='form-control' value={eventDetails.To} onChange={handleChange('To')} required /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Event Description</TableCell>
                                <TableCell><textarea type="text" className='form-control' rows="6" placeholder="Event Description" value={eventDetails.EventDescription} onChange={handleChange('EventDescription')} ></textarea></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Event Host</TableCell>
                                <TableCell><input type="text" className='form-control' placeholder="Host Name" value={eventDetails.EventHost} onChange={handleChange('EventHost')} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Event Status</TableCell>
                                <TableCell>
                                    <Form.Control as='select' onChange={handleChange('EventStatus')} required>
                                        <option>{eventDetails.EventStatus}</option>
                                        <option value="past">Past</option>
                                        <option value="upcoming">Upcoming</option>
                                    </Form.Control>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                {
                    loading ?
                        <Button className="btn main-color-bg btn-block mt-3" disabled><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /><span className='ml-2'>Updating...</span></Button> :
                        <button className="btn main-color-bg btn-block mt-3" type='submit'>Update</button>
                }
            </form>
            {
                deleting ?
                    <Button className="btn main-color-bg btn-block mt-3" disabled><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /><span className='ml-2'>Deleting...</span></Button> :
                    <button className="btn main-color-bg btn-block mt-3" onClick={deleteEvent}>Delete Event</button>
            }
        </div>
    )
}