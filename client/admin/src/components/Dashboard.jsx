import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUser, faCalendarAlt, faEdit } from "@fortawesome/free-solid-svg-icons"
function Dashboard() {
    return (
        <div className="list-group">
            <a href="/dashboard" className="list-group-item active main-color-bg white"><FontAwesomeIcon icon={faCogs} /> Dashboard</a>
            <a href="/form" className="list-group-item black"><FontAwesomeIcon icon={faEdit} /> Add Event</a>
            <a href="/events" className="list-group-item black"><FontAwesomeIcon icon={faCalendarAlt} /> Events</a>
            <a href="/users" className="list-group-item black"><FontAwesomeIcon icon={faUser} /> Users</a>
            {/* <span className="badge badge-pill badge-secondary">203</span> */}
        </div>
    )
}

export default Dashboard
