import React, { Component } from "react";
import Study from "../img/study.png";
import Whatwedo from "../img/whatwedo.jpg";
// local css
import "../css/main.css";
export default class main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-md-none px-2 m-0 mt-2 d-flex justify-content-center">
            <img src={Study} className="img-fluid" alt="alt" />
          </div>
          <div className="col-sm-12 col-md-5 p-0 mt-3 mt-md-5">
            <h3
              className="text-primary text-center my-4 fontalicious ff-helvetica"
              style={{ fontSize: "44px" }}
            >
              FUEL YOUR PASSION{" "}
            </h3>
            <p className="text-142849 mx-auto px-5">
              Developer Student Clubs are university based community groups for
              students interested in Google developer technologies. Students
              from all undergraduate or graduate programs with an interest in
              growing as a developer are welcome. By joining a DSC, students
              grow their knowledge in a peer-to-peer learning environment and
              build solutions for local businesses and their community.
            </p>
            <div className="container row p-0">
              <div className="col-6 text-center p-0">
                <a
                  href="https://dsc.community.dev/c-v-raman-global-university/"
                  className="mt-5 px-4 py-2 hvr-wobble-horizontal hvr-sweep-to-right"
                >
                  JOIN US
                </a>
              </div>
              <div className="col-6 text-center p-0">
                <a
                  href="https://developers.google.com/community/dsc/"
                  className="mt-5 px-4 py-2 hvr-wobble-horizontal hvr-sweep-to-right"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-auto d-none d-md-block">
            <img src={Study} className="img-fluid" alt="alt" />
          </div>
        </div>
        <hr className="mt-5" />
        <div className="container mx-auto row py-3">
          <div className="col text-blue text-center py-3" id="one">
            Connect
          </div>
          <div className="col text-green text-center py-3" id="two">
            Learn
          </div>
          <div className="col text-yellow text-center py-3" id="three">
            Develop
          </div>
          <div className="col text-red text-center py-3" id="four">
            Grow
          </div>
        </div>
        <hr className="mb-3" />
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 p-5 text-142849 fs-20">
            We at <span className="text-blue">DSC CVRGU</span> believe in
            building a strong community where people can learn and grow
            together. Our goal is to combine new ideas with technical skills to
            build something innovative and exemplary. Share your ideas with us
            and be a part of this amazing family . #Join_Us !!!
          </div>
        </div>
        <div className="row mb-50">
          <div className="col-md-6 text-center m-auto">
            <img src={Whatwedo} className="img-fluid" alt="whatwedo" />
          </div>
          <div className="col-md-6 px-4 text-center">
            <div className="col-10 mt-3">
              <p className="py-3 m-0 ff-helvetica h2">What We Do</p>
            </div>
            <div className="col-10 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Web Development</p>
            </div>
            <div className="col-10 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Flutter</p>
            </div>
            <div className="col-10 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Native Android</p>
            </div>
            <div className="col-10 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Machine Learning</p>
            </div>
            <div className="col-10 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">UI/UX</p>
            </div>
            <div className="col-10 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Actions on Google</p>
            </div>
            <div className="col-10 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Competitive Coding</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
