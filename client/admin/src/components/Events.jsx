import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import { firestore } from 'firebase/app'
import { useEffect, useState } from 'react'
import TablePagination from "@material-ui/core/TablePagination";

const Events = () => {
    const [eventArr, setEventArr] = useState([]);
    const tempArr = [];
    //table pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        firestore().collection('Events').get()
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    tempArr.push({
                        name: doc.data().EventTitle,
                        id: doc.data().EventId,
                        date: doc.data().From.split("T")[0],
                        host: doc.data().EventHost
                    })
                })
                setEventArr(tempArr);
            }).catch(err => console.log(err.message));

    }, [tempArr])

    return (
        <div>
            <NavBar />
            <Header name={'Events'} />
            <section id="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                        <li className="breadcrumb-item active">Events</li>
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
                                    <h5 className="card-title mb-0">Events</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" placeholder="Filter Events..." />
                                        </div>
                                    </div>
                                    <br />
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Event Title</th>
                                                <th>Event ID</th>
                                                <th>Event Date</th>
                                                <th>Hosted By</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {eventArr.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(event => {
                                                return (
                                                    <tr key={event.name}>
                                                        <td>{event.name}</td>
                                                        <td>{event.id}</td>
                                                        <td>{event.date}</td>
                                                        <td>{event.host}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, 100]}
                                        component="div"
                                        count={eventArr.length}
                                        page={page}
                                        onChangePage={handleChangePage}
                                        rowsPerPage={rowsPerPage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                    />
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

export default Events