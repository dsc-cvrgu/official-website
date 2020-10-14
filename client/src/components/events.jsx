import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";
import EventCard from "./eventcard";
import Carousel from "react-bootstrap/Carousel";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Footer from './footer'
import $ from 'jquery'
import "../css/events.css";

function Events(state) {
  //TODO: setUpcomingEvents
  //TODO : setPastEvents
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 440,
    },
  });
  const history = useHistory();

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      eventDate: "20th sep 2020",
      eventLocation: "bs block bbsr",
      eventTime: "0900hrs - 1200hrs",
      posterLink: "",
      eventId: 123
    },
    {
      eventDate: "21th sep 2020",
      eventLocation: "bs block bbsr",
      eventTime: "0900hrs - 1200hrs",
      posterLink: "",
      eventId: 124

    },
    {
      eventDate: "22th sep 2020",
      eventLocation: "bs block bbsr",
      eventTime: "0900hrs - 1200hrs",
      posterLink: "",
      eventId: 125

    },
    {
      eventDate: "23th sep 2020",
      eventLocation: "bs block bbsr",
      eventTime: "0900hrs - 1200hrs",
      posterLink: "",
      eventId: 126

    },
    {
      eventDate: "24th sep 2020",
      eventLocation: "bs block bbsr",
      eventTime: "0900hrs - 1200hrs",
      posterLink: "",
      eventId: 127

    },
    {
      eventDate: "25th sep 2020",
      eventLocation: "bs block bbsr",
      eventTime: "0900hrs - 1200hrs",
      posterLink: "",
      eventId: 128

    },

  ]);
  const [pastEvents, setPastEvents] = useState([])

  const columns = [
    { id: "name", label: "Event Name", minWidth: 250 },
    { id: "date", label: "date", minWidth: 30 },
    {
      id: "seemore",
      label: "See more",
      minWidth: 30,
      align: "right",
    },
  ];

  // {name:"android dev" , date:"2020-20-98" , seemore:"seemore" , eventId:7678web
  //TODO : useEffect()
  useEffect(() => {
    $('#bubble').css('z-index', '-1');
    //TODO: fill the rows array with event objects 
    const rows = [
      { name: "android dev", date: "2020-20-98", seemore: "See More", eventId: 7678528528 },
      { name: "web dev", date: "2020-20-98", seemore: "See More", eventId: 7678528528 },
      { name: "android dev", date: "2020-20-98", seemore: "See More", eventId: 7678528528 },
      { name: "web dev", date: "2020-20-98", seemore: "See More", eventId: 7678528528 },
      { name: "android dev", date: "2020-20-98", seemore: "See More", eventId: 7678528528 },
      { name: "web dev", date: "2020-20-98", seemore: "See More", eventId: 7678528528 },
      { name: "android dev", date: "2020-20-98", seemore: "See More", eventId: 7678528528 },
      { name: "android dev", date: "2020-20-98", seemore: "See More", eventId: 7678528528 },
      { name: "android dev", date: "2020-20-98", seemore: "See More", eventId: 7678528528 }
    ];

    setPastEvents(rows);

  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Navbar isSignedIn={state.isSignedIn} />
      {/*list of upcoming events */}
      <div className="upcoming_events_headers" style={{ marginBottom: "45px" }}>
        <h1>Our<span className="text-primary"> Events</span></h1>
        <h5>come ,learn ,share and connect</h5>
      </div>
      <div className="upcoming_events_headers">
        <h3><span className="text-primary">Upcoming Events</span></h3>
        <p>Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.</p>
      </div>
      <div className="upcoming_events" >
        <Carousel>
          {upcomingEvents.map((event, index) => {
            if (index % 4 === 0) {
              const arr = [];
              for (let i = index; i < index + 4; i++) {
                if (!upcomingEvents[i]) {
                  break;
                }
                arr.push(upcomingEvents[i]);
              }
              console.log(arr)
              return (
                <Carousel.Item >
                  {arr.map((e) => {
                    return (
                      <EventCard
                        key={e.eventId}
                        eventTime={e.eventTime}
                        eventDate={e.eventDate}
                        eventLocation={e.eventLocation}
                        posterLink={e.posterLink}
                        eventTitle={e.eventTitle}
                        eventId={e.eventId}
                      />
                    );
                  })}
                </Carousel.Item>
              );
            }
          })}
        </Carousel>
      </div>
      {/*search bar */}

      <div style={{ width: "80%", margin: "10px  auto 50px auto" }}>
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-md-8">
            <h3><span className="text-primary">Past</span> Events</h3>
          </div>
          <div className="col-md-4" >
            <FormControl className="searchBar mr-sm-2" type="text" placeholder="Search" />
          </div>
        </div>
        <Paper className={classes.root}>
          <TableContainer className={classes.container} >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth,
                        fontWeight: "bold",
                      }}                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {pastEvents
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          if (value === "See More") {
                            return (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                onClick={() =>
                                  history.push(`/eventdetails/${row.eventId}`)
                                }
                                style={{
                                  textDecoration: "underline",
                                  color: "blue",
                                  cursor: "pointer",
                                }}>
                                {column.format && typeof value === "number" ? column.format(value) : value}
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          }
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={pastEvents.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      {/*list of carousel events  */}
      <Footer />
    </>
  );
}

export default Events;
