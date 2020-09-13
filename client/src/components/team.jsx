import React from "react";
import Deepak from "../img/team/deepak.jpg";
import Aashutosh from "../img/team/aasutosh.jpg";
import Abhishek from "../img/team/abhishek.jpg";
import Abhishekkumar from "../img/team/abhishekkumar.jpg";
import Aman from "../img/team/aman.jpg";
import Amisha from "../img/team/amisha.jpg";
import Anita from "../img/team/anita.jpg";
import Atman from "../img/team/atman.jpg";
import Bharat from "../img/team/bharat.jpg";
import Bunny from "../img/team/bunny.jpg";
import Divanti from "../img/team/divanti.jpg";
import Ippsa from "../img/team/ippsa.jpg";
import Logo from "../img/team/logo.jpeg";
import Nausin from "../img/team/nausin.jpg";
import Rajeev from "../img/team/rajeev.jpg";
import Ramraaj from "../img/team/ramraaj.jpg";
import Ritesh from "../img/team/ritesh.jpg";
import Rukaiya from "../img/team/rukaiya.jpg";
import Samar from "../img/team/samar.jpg";
import Saumya from "../img/team/saumya.jpg";
import Saurabh from "../img/team/saurabh.jpg";
import Sidharth from "../img/team/sidharth.jpg";
import Snata from "../img/team/snata.jpg";
import Snehashis from "../img/team/snehashis.jpg";
import Swapnali from "../img/team/swapnali.jpg";
import Team2 from "../img/team/team2.jpg";
import Yash from "../img/team/yash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// components
import Navbar from "./navbar";
import Footer from "./footer";
// local css
import "../css/team.css";

class Team extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <section id="team" className="my-4">
          <div className="container">
            <h1 className="text-center pt-2 pb-2">DSC Lead</h1>
            <div className="border"></div>
            <div className="row">
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Aman}
                    alt="aman"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Aman Irshad</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">
                        Developer Student Clubs Lead
                      </h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/amanirshad/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/amanirshad7/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="#" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="my-4">
          <div className="container">
            <h1 className="text-center pt-2 pb-2">Board Members</h1>
            <div className="border"></div>
            <div className="row">
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Ritesh}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Ritesh Kumar Sinha</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Technical Lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/ritesh-kumar-sinha-8558861a7/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/riteshsinha70/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a
                      href="https://twitter.com/Riteshk86822970?s=08"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Deepak}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">deepak kumar sahoo</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">project lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/deepak-kumar-sahoo-59247b19a/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/_.deepak._988/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a
                      href="https://twitter.com/DEEPAKK60928454"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Saumya}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Saumya Srivastava</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Operation Lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/saumya-srivastava-703bb31ab/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/saumya3215/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Ippsa}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className=" text-capitalize">Ippsa Mahana </h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Head of Management</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/ippsa-mahana-0577b2193/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/__ippsaaa__/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="https://twitter.com/asppi2806" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Anita}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Anita kumari Jena</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Women tech lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/anitakumarijena/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/___ani_jena_714___/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a
                      href="https://twitter.com/AnitakumariJen1"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Snata}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Snata Gayan</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Head Of Designing</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/snata-gayan-5b349b19b/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/s.n.a.t.a_/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="https://twitter.com/GayanSnata" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="my-4">
          <div className="container">
            <h1 className="text-center pt-2 pb-2">Technical Team</h1>
            <div className="border"></div>
            <div className="row">
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Atman}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Atman Das</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Web Development Lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/atmanad/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/__ghost_1/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Sidharth}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className=" text-capitalize">Sidharth Bhunia</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Android lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/sidharth-bhunia-563852190"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Bunny}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Shubham Gaurav</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">
                        Competitive Coding Lead
                      </h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/shubham-gaurav-a86090192"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/bunny_gaurav/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Abhishekkumar}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Abhishek Kumar</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Android Lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/abhishek-kumar-42437119b/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/iamabhishek_77/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a
                      href="https://twitter.com/iamabhishek_77"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Rukaiya}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className=" text-capitalize">Rukaiya Khan</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">
                        Associate Web development Lead
                      </h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/rukaiyak/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/rukaiyak_/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="https://twitter.com/ruk_____" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Snehashis}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Snehashis Pati</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">
                        Associate Web development Lead
                      </h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/snehashis-pati-536bb81aa"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href=" https://instagram.com/snehasish_pati?igshid=106xk4esdb4qx"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Samar}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Samar Chandra</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">
                        Associate Competitive Coding Lead
                      </h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/samar-chandra-5255651b3/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/_i.samar/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a
                      href="https://mobile.twitter.com/SamarChandra4"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Amisha}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className=" text-capitalize">Amisha Kirti</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Associate ML Lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/amisha-kirti-79410716a"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/kirti_amisha/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a
                      href="https://mobile.twitter.com/kirtiastic"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Yash}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Yahraj Jain</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">ML Lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/yashraj-jain-695453178/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/_infynite_/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a
                      href="https://twitter.com/yashrajjain726"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Aashutosh}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Aashutosh Agrahari</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Associate ML lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/aashutosh-agrahari-3ba6421b6"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/aashutoshagrahari/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Team2}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">name</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">designation</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Team2}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">name</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">designation</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="my-4">
          <div className="container">
            <h1 className="text-center pt-2 pb-2">Management Team</h1>
            <div className="border"></div>
            <div className="row">
              {/*team meebers  */}
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Bharat}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Bharat Shubham</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Manager</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/bharat-shubham-6b5808190/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/bharatshubham5/?hl=en"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a
                      href="https://twitter.com/BharatShubham9"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Divanti}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className=" text-capitalize">Divanti Neogi</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Editorial Manager</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="linkedin.com/in/divanti-neogi-20111219b"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/_divss__/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a
                      href="https://twitter.com/DivantiNeogi?s=09"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Swapnali}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Swapnali Gouda</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Editorial Head</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/swapnali-gouda-5bb7371a6/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/__cerca_trova_/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Nausin}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Nausin Nigar</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Management Co-Lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/nausin-nigar-87a0951a9"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/nausin_nigar/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="https://twitter.com/NausinNigar" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Saurabh}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Saurabh Kumar</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">
                        Marketing and Sponsorship Lead
                      </h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a
                      href="https://www.linkedin.com/in/saurabh-kumar-7214aa176/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/_ska_03/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Team2}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">name</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">designation</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="my-4">
          <div className="container">
            <h1 className="text-center pt-2 pb-2">Public Relation Team</h1>
            <div className="border"></div>

            <div className="row">
              <div className="col-11 col-lg-4 mx-auto my-5">
                <div className="card pb-4">
                  <img
                    src={Abhishek}
                    alt="alt"
                    className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1"
                  />
                  <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">Abhishek Dey</h4>
                    <div className="card-title">
                      <h5 className="text-center mt-3">Public Relation Lead</h5>
                    </div>
                  </div>
                  <div className="team-icons d-flex justify-content-center">
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="linkedin"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="instagram"
                      />
                    </a>
                    <a href="" target="_blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        className="twitter"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Team;
