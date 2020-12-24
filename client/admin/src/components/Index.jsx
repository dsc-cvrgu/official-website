import React, { useEffect, useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons"
import Dashboard from './Dashboard';
import firebase from 'firebase/app'
import 'firebase/firestore'

const Index = () => {
    let [userCount, setUserCount] = useState(0);
    let [eventCount, setEventCount] = useState(0);
    useEffect(() => {
        firebase.firestore().collection('User Data').get().then(snapshot => {
            setUserCount(snapshot.xf.docChanges.length);
        }).catch(err => console.log(err));
        firebase.firestore().collection('Events').get().then(snapshot => {
            setEventCount(snapshot.xf.docChanges.length);
        }).catch(err => console.log(err));
    }, []);
    return (
        <div>
            <NavBar />
            <Header name={'Dashboard'} />
            <section className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Dashboard />
                    </div>
                    <div className="col-md-9">
                        {/* <!-- Website Overview --> */}
                        <div className="card">
                            <div className="card-header main-color-bg">
                                <h5 className="card-title mb-0">Website Overview</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card text-center py-3">
                                            <h2><FontAwesomeIcon icon={faUser} className='mr-2' />{userCount}</h2>
                                            <h4>Users</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card text-center py-3">
                                            <h2><FontAwesomeIcon icon={faCalendar} className='mr-2' />{eventCount}</h2>
                                            <h4>Events</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer">
                <p>Copyright DSC CVRGU &copy; 2020</p>
            </footer>
        </div>
    )
}

export default Index
