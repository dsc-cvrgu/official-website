import React, { useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import { firestore } from 'firebase/app'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Form } from 'react-bootstrap'


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

    const handleChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.id);
        firestore().collection('Events').doc(e.target.id).update({
            EventStatus: e.target.value
        }).then(() => {
            console.log('updated');
        }).catch(err => console.log(err));
    }

    const fetchData = () => {
        firestore().collection('Events').orderBy('timestamp', 'desc').get()
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    tempArr.push({
                        name: doc.data().EventTitle,
                        id: doc.data().EventId,
                        date: doc.data().From.split("T")[0],
                        status: doc.data().EventStatus
                    })
                })
                setEventArr(tempArr);
            }).catch(err => console.log(err.message));
    }

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
                            <div className="card-header main-color-bg">
                                <div className="row">
                                    <h5 className="col card-title mb-0">Events</h5>
                                </div>
                            </div>
                            <button className='btn btn-block main-color-bg my-2' onClick={fetchData}>Fetch Data</button>

                            <Paper>
                                <TableContainer>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className="font-weight-bold">Title</TableCell>
                                                <TableCell className="font-weight-bold">Id</TableCell>
                                                <TableCell className="font-weight-bold">Date</TableCell>
                                                <TableCell className="font-weight-bold">Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {eventArr.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(event => {
                                                return (
                                                    <TableRow key={event.name}>
                                                        <TableCell>{event.name}</TableCell>
                                                        <TableCell>{event.id}</TableCell>
                                                        <TableCell>{event.date}</TableCell>
                                                        <TableCell>
                                                            <Form.Control as='select' id={event.id} onChange={handleChange} style={{ width: '120px' }}>
                                                                <option>{event.status}</option>
                                                                <option value="upcoming">Upcoming</option>
                                                                <option value="past">Past</option>
                                                            </Form.Control>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, 100]}
                                    component="div"
                                    count={eventArr.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                            </Paper>
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