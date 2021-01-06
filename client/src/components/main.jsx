import React, { Component } from "react";
import Typed from 'react-typed'
import Study from "../img/studyc.png";
import "../particles";
import web from '../img/web.svg'
import ml from '../img/ml.svg'
import flutter from '../img/flutter.svg'
import android from '../img/android.svg'
import competitive from '../img/competitive.svg'
import google from '../img/google.png'
import ui from '../img/ui.png'
import cyber from '../img/cyber.png'
import TechStack from './techStack'
// local css
import "../css/main.css";

export default class main extends Component {
  render() {
    return (
      <>
        <div className="container-fluid" style={{ margin: '60px auto auto auto' }}>
          <div className="row">
            <div className="col-sm-12 col-md-6 d-md-none px-2 m-0 mt-2 d-flex justify-content-center">
              <img src={Study} className="img-fluid" alt="alt" />
            </div>
            <div className="col-sm-12 col-md-5 p-0 mt-3 mt-md-5 container">
              <div className='typed-content my-4 pl-4'>
                <Typed
                  strings={["<blue>FUEL YOUR PASSION</blue>", "<blue>Connect</blue>", "<green>Learn</green>", "<yellow>Develop</yellow>", "<red>Grow</red>"]}
                  typeSpeed={40}
                  backSpeed={30}
                  backDelay={1500}
                  cursorChar={"_"}
                  loop
                />
              </div>
              <p className="text-142849 mx-auto mt-3 px-4 md-px-5">
                Developer Student Clubs are university based community groups for
                students interested in Google developer technologies. Students
                from all undergraduate or graduate programs with an interest in
                growing as a developer are welcome. By joining a DSC, students
                grow their knowledge in a peer-to-peer learning environment and
                build solutions for local businesses and their community.
              </p>
              <div className="container row">
                <div className="col-6 pr-0 pl-4">
                  <a href="https://dsc.community.dev/c-v-raman-global-university/"
                    className="mt-5 py-2 hvr-wobble-horizontal hvr-sweep-to-right" style={{ padding: '8px 37px 8px 37px' }}>
                    JOIN US
                </a>
                </div>
                <div className="col-6 text-center p-0">
                  <a href="https://developers.google.com/community/dsc/"
                    className="mt-5 px-4 py-2 hvr-wobble-horizontal hvr-sweep-to-right">
                    READ MORE
                </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 m-auto d-none d-md-block">
              <img src={Study} className="img-fluid" alt="alt" />
            </div>
          </div>
        </div>
        <div id="who-we-are" className="my-5">
          <p className="text-center pt-4 fs-40">Who We Are</p>
          <div className="col-md-8 pt-3 pb-5 fs-20 mx-auto text-142849">
            We at <span className="text-blue">DSC CVRGU</span> believe in
            building a strong community where people can learn and grow
            together. Our goal is to combine new ideas with technical skills to
            build something innovative and exemplary. Share your ideas with us
            and be a part of this amazing family . <span className="text-green ml-md-3">#Join_Us</span>
          </div>
        </div>
        <div className="container-fluid">

          {/* what we do */}
          <p className="text-center pt-4 fs-40">What We Do</p>
          <div className="container">
            <div className="row mb-2 pt-3 mr-0 mx-auto d-flex justify-content-center">
              <TechStack data={{ src: web, name: "Web Development", style: { width: "60px" } }} />
              <TechStack data={{ src: ml, name: "Machine Learning", style: { width: "60px" } }} />
              <TechStack data={{ src: flutter, name: "Flutter", style: { height: "60px" } }} />
              <TechStack data={{ src: android, name: "Android Development", style: { width: "60px" } }} />
            </div>
            <div className="row mb-5 mx-auto mr-0 d-flex justify-content-center">
              <TechStack data={{ src: competitive, name: "Competitive Coding", style: { width: "60px" } }} />
              <TechStack data={{ src: google, name: "Actions on Google", style: { width: "85px" } }} />
              <TechStack data={{ src: ui, name: "UI / UX", style: { width: "60px" } }} />
              <TechStack data={{ src: cyber, name: "Cyber Security", style: { width: "60px" } }} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
