import React, { Component } from "react";
import Study from "../img/study.png";
export default class main extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-6 d-md-none p-0 m-0 mt-2 d-flex justify-content-center">
            <img src={Study} className="img-fluid" alt="alt" />
          </div>

          <div className="col-sm-12 col-md-5 p-0 mt-3 mt-md-5">
            <h3
              className="text-primary text-center my-4 fontalicious"
              style={{ fontSize: "44px" }}
            >
              Fuel Your Passion
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
                  href="#"
                  className="mt-5 px-4 py-2 hvr-wobble-horizontal hvr-sweep-to-right"
                >
                  JOIN US
                </a>
              </div>
              <div className="col-6 text-center p-0">
                <a
                  href="#"
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
        <hr />
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
        <hr />
        <div className="row" style={{ padding: "40px 10px" }}>
          <div className="col-md-6 text-center m-auto">
            <p className="h2">Who We Are</p>
          </div>
          <div className="col-md-6 p-5 text-142849">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            porro sunt neque ipsa recusandae excepturi dolorum fuga est ea
            sapiente, itaque magni. Eligendi error aliquid adipisci inventore.
            Dignissimos, ad fugiat!
          </div>
        </div>
        <div className="row mb-50">
          <div className="col-md-6 text-center m-auto d-sm-none">
            <p className="h2">What We Do</p>
          </div>
          <div className="col-md-6 px-4 text-center">
            <div className="col-8 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Web Development</p>
            </div>
            <div className="col-8 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Flutter</p>
            </div>
            <div className="col-8 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Native Android</p>
            </div>
            <div className="col-8 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Machine Learning</p>
            </div>
            <div className="col-8 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">UI/UX</p>
            </div>
            <div className="col-8 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Actions on Google</p>
            </div>
            <div className="col-8 hvr-grow-shadow mt-3">
              <p className="py-3 m-0">Competitive Coding</p>
            </div>
          </div>
          <div className="col-md-6 text-center m-auto d-none d-sm-block">
            <p className="h2">What We Do</p>
          </div>
        </div>
        <h4 className="text-center my-5">LOCATE US</h4>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.9519226406846!2d85.73354961425309!3d20.2193187864424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a8fa59ac3c81%3A0xc81fc475faa77274!2sC.%20V.%20Raman%20Global%20University!5e0!3m2!1sen!2sin!4v1599297494906!5m2!1sen!2sin"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    );
  }
}
