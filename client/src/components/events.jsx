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
import firebase from 'firebase'
import "../css/events.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Events(state) {
  
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
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([])
  const [show, setShow] = useState(false);


 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
   
  
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

 
  useEffect(() => {
    
    getAllEvents()

  }, [])


 //GET ALL EVENTS
  const getAllEvents=()=>{
    const rows = []
    const upEvents =[]
    const months ={
        1:"Jan",
        2:"Feb",
        3:"March",
        4:"April",
        5:"May",
        6:"June",
        7:"July",
        8:"Aug",
        9:"Sep",
        10:"Oct",
        11:"Nov",
        12:"Dec"
    }
    
    firebase.firestore().collection('Events').get()
            .then(snapshot=> {snapshot.docs.forEach(doc =>{
              if(doc.data().Status==='past'){
               
                rows.push({
                  name: doc.data().EventTitle,
                  seemore:"See More",
                  eventId:doc.data().EventId,
                  date: doc.data().EventTime.From.split("T")[0],               
                 
                })
              }

               if(doc.data().Status ==='upcoming')
               {  console.log("hiii up")
                const From =doc.data().EventTime.From
                const To = doc.data().EventTime.To
                
                const  FromInfo = From.split("T")
                const ToInfo = To.split("T")
                
                const FromDate = FromInfo[0].split("-") 
                const FromTime = FromInfo[1].split(":")
                
                let  eventTiming=""
                if(FromDate[1].charAt(0)=== '0')
                  {
                    eventTiming = FromDate[2]+"th"+" "+months[FromDate[1].charAt(1)]+" "+FromDate[0]
                  }
                else{
                    eventTiming = FromDate[2]+"th"+" "+months[FromDate[1]]+" "+FromDate[0]
                }
                              
                
                const ToDate = ToInfo[0].split("-")
                const ToTime  = ToInfo[1].split(":")
                let time1 = FromTime[0]+":"+FromTime[1]+"AM"
                if(parseInt(FromTime[0])>=12){
                   
                     time1=FromTime[0]+":"+FromTime[1]+"PM"
                     const t1 = parseInt(FromTime[0])
                   if(t1>12){
                     time1= (t1-12)+":"+FromTime[1]+"PM"
                   }
                }
                let time2 = ToTime[0]+":"+ToTime[1]+"AM"
                if(parseInt(ToTime[0])>=12)
                  {
                    time2 =ToTime[0]+":"+ToTime[1]+"PM"
                    const t2 = parseInt(ToTime[0])
                    if(t2>12){
                      time2 = (t2-12)+":"+FromTime[1]+"PM"
                    }
                  }
                const time = time1+" - "+ time2
                 upEvents.push({
                  eventDate: eventTiming,
                  eventLocation: doc.data().EventLocation,
                  eventTime: time,
                  posterLink: doc.data().EventPoster,
                  eventId: doc.data().EventId,
                  hostedBy:doc.data().HostedBy,
                  eventDescription:doc.data().EventDescription,
                  eventLink:doc.data().EventLink,
                  eventTitle:doc.data().EventTitle,
                  Participants:doc.data().Participants
                 })
               } 
             

             
            })

            setPastEvents(rows);
            setUpcomingEvents(upEvents)
            console.log(upEvents)
          })
            .catch(err =>console.log(err))

  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  
 


  return (
    <div>
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
        <Carousel >
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
                        eventLink={e.eventLink}
                        hostedBy={e.hostedBy}
                        eventDescription={e.eventDescription}
                        Participants={e.Participants}
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
        <div className="row " style={{ marginBottom: "20px" }}>
          <div className="col-md-8">
            <h3><span className="text-primary">Past</span> Events</h3>
          </div>
          <div className="col-md-4" >

            <FormControl className="searchBar mr-sm-2" type="text" placeholder="Search" />

          </div>
        </div>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
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
                      }}
                    >
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
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          if (value === "See More") {
                            return (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                onClick={() =>
                                  history.push(`/eventdetails/${row.eventId}`) // SEPARATE MODAL FOR PAST EVENTS
                                }
                                style={{
                                  textDecoration: "underline",
                                  color: "blue",
                                  cursor: "pointer",
                                }}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
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

      {/*list of carosaol events  */}
      <Footer />
    </div>
  );
}

export default Events;
