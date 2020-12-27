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
import EventCard from "./eventcard";
import Footer from './footer';
import { firestore } from 'firebase/app';
import "../css/events.css";
import { ToastContainer } from "react-toastify";

function Events(state) {

  const useStyles = makeStyles({
    container: {
      maxHeight: 440,
    },
  });

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
    document.title = "DSC CVRGU | Events";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const row = []
  const upEvents = []
  //GET ALL EVENTS
  const getAllEvents = () => {

    const months = {
      1: "Jan",
      2: "Feb",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec"
    }
    firestore().collection('Events').orderBy('timestamp', 'desc').get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          if (doc.data().EventStatus === 'past') {
            row.push({
              name: doc.data().EventTitle,
              seemore: "See More",
              eventId: doc.data().EventId,
              date: doc.data().From.split("T")[0],
            })
          }
          else if (doc.data().EventStatus === 'upcoming') {
            const From = doc.data().From
            const To = doc.data().To

            const FromInfo = From.split("T")
            const ToInfo = To.split("T")

            const FromDate = FromInfo[0].split("-")
            const FromTime = FromInfo[1].split(":")

            let eventTiming = ""
            if (FromDate[1].charAt(0) === '0') {
              eventTiming = FromDate[2] + " " + months[FromDate[1].charAt(1)] + " " + FromDate[0]
            }
            else {
              eventTiming = FromDate[2] + " " + months[FromDate[1]] + " " + FromDate[0]
            }
            const ToTime = ToInfo[1].split(":")
            let time1 = FromTime[0] + ":" + FromTime[1] + "AM"
            if (parseInt(FromTime[0]) >= 12) {

              time1 = FromTime[0] + ":" + FromTime[1] + "PM"
              const t1 = parseInt(FromTime[0])
              if (t1 > 12) {
                time1 = (t1 - 12) + ":" + FromTime[1] + "PM"
              }
            }
            let time2 = ToTime[0] + ":" + ToTime[1] + "AM"
            if (parseInt(ToTime[0]) >= 12) {
              time2 = ToTime[0] + ":" + ToTime[1] + "PM"
              const t2 = parseInt(ToTime[0])
              if (t2 > 12) {
                time2 = (t2 - 12) + ":" + FromTime[1] + "PM"
              }
            }
            const time = time1 + " - " + time2
            upEvents.push({
              eventDate: eventTiming,
              eventLocation: doc.data().EventLocation,
              eventTime: time,
              posterLink: doc.data().EventPoster,
              eventId: doc.data().EventId,
              hostedBy: doc.data().EventHost,
              eventDescription: doc.data().EventDescription,
              eventLink: doc.data().EventLink,
              eventTitle: doc.data().EventTitle,
              Participants: doc.data().EventParticipants
            })
          }
        })

        setPastEvents(row);
        setUpcomingEvents(upEvents);
      })
      .catch(err => console.log(err))
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Navbar isSignedIn={state.isSignedIn} />
      <ToastContainer />
      {/*list of upcoming events */}
      <div className="container px-2" style={{ margin: "100px auto 50px auto" }}>
        <h1>Our<span className="text-primary"> Events</span></h1>
        <h5 className="mb-3">Connect, Learn, Develop, Grow</h5>
        <h3><span className="text-primary">Upcoming</span> Events</h3>
        <p>Our events are open to newbies, developers, and organizations who are interested in Google's technologies or to use them as a part of their projects.</p>

        <div className="row container mx-auto">
          {upcomingEvents.map((e) => {
            return (
              <EventCard
                key={e.eventId}
                eventTime={e.eventTime}
                eventDate={e.eventDate}
                eventLocation={e.eventLocation}
                posterLink={e.posterLink}
                eventTitle={e.eventTitle}
                eventId={e.eventId}
                eventLink={e.eventLink}
                hostedBy={e.hostedBy}
                eventDescription={e.eventDescription}
                Participants={e.Participants} />
            );
          })}
        </div>
      </div>

      <div className="container px-2" style={{ margin: "10px auto 50px auto" }}>
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-md-8">
            <h3><span className="text-primary">Past</span> Events</h3>
          </div>
        </div>
        <Paper>
          <TableContainer className={classes.container} >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell className="font-weight-bold">Event Name</TableCell>
                  <TableCell className="font-weight-bold">Date</TableCell>
                  <TableCell className="font-weight-bold" align={"right"}>See more</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pastEvents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(event => {
                  return (
                    <TableRow key={event.name}>
                      <TableCell>{event.name}</TableCell>
                      <TableCell>{event.date}</TableCell>
                      <TableCell align={"right"}>See more</TableCell>
                    </TableRow>
                  )
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
      <Footer />
    </div>
  );
}

export default Events;