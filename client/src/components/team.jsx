import React from "react";
import Deepak from "../img/team/deepak.jpg";
import Aashutosh from "../img/team/aasutosh.jpg";
import Abhishek from "../img/team/abhishek.jpg";
import Abhishekkumar from "../img/team/abhishekkumar.jpg";
import Aditi from "../img/team/aditi.jpg";
import Aman from "../img/team/aman.jpg";
import Amisha from "../img/team/amisha.jpg";
import Anita from "../img/team/anita.jpg";
import Ashirbad from "../img/team/ashirbad.jpg"
import Atman from "../img/team/atman.JPG";
import Bharat from "../img/team/bharat.jpg";
import Bunny from "../img/team/bunny.jpg";
import Divanti from "../img/team/divanti.jpg";
import Ippsa from "../img/team/ippsa.jpg";
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
import Yash from "../img/team/yash.jpg";
import SagarSourav from "../img/team/sagar_saurav.jpg"
import NabaRatan from "../img/team/naba_ratan_patra.jpg"
import Harshit from "../img/team/harshit.jpg"
import Rashmi from "../img/team/rashmi.jpg"
import Monalisa from "../img/team/monalisa.jpg"
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// components
import Navbar from "./navbar";
import Footer from "./footer";
import TeamCard from "./TeamCard.jsx"
// local css
import "../css/team.css";

const Team = (state) => {

  return (
    <div>
      <Navbar isSignedIn={state.isSignedIn} />
      <section id="team" className="my-4">
        <div className="container">
          <h2 className="py-2 text-center">DSC Lead</h2>
          <div className="border"></div>
          <div className="row text-center">
            <TeamCard data={{ src: Aman, name: "Aman Irshad", des: "DSC Lead", social: [{ href: "https://www.linkedin.com/in/amanirshad/", icon: faLinkedin }, { href: "https://www.instagram.com/amanirshad7/", icon: faInstagram }] }} />
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container text-center">
          <h2 className="text-center pt-2 pb-2">Faculties</h2>
          <div className="border"></div>
          <div className="row">
            <TeamCard data={{ src: Monalisa, name: "Monalisa Mishra", des: "Faculty Advisor", social: [{ href: "#", icon: faLinkedin }] }} />
            <TeamCard data={{ src: Rashmi, name: "Rasmi Ranjan Khansama", des: "Mentor", social: [{ href: "https://www.facebook.com/rasmiranjan.khansama", icon: faFacebook }] }} />
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container text-center">
          <h2 className="text-center pt-2 pb-2">Board Members</h2>
          <div className="border"></div>
          <div className="row">
            <TeamCard data={{ src: Ritesh, name: "Ritesh Kumar Sinha", des: "Technical Lead", social: [{ href: "https://www.linkedin.com/in/ritesh-kumar-sinha-8558861a7/", icon: faLinkedin }, { href: "https://www.instagram.com/riteshsinha70/", icon: faInstagram }, { href: "https://twitter.com/Riteshk86822970?s=08", icon: faTwitter }] }} />
            <TeamCard data={{ src: Deepak, name: "Deepak kumar sahoo", des: "project lead", social: [{ href: "https://www.linkedin.com/in/deepak-kumar-sahoo-59247b19a/", icon: faLinkedin }, { href: "https://www.instagram.com/_.deepak._988/", icon: faInstagram }, { href: "https://twitter.com/DEEPAKK60928454", icon: faTwitter }] }} />
            <TeamCard data={{ src: Saumya, name: "Saumya Srivastava", des: "Operation Lead", social: [{ href: "https://www.linkedin.com/in/saumya-srivastava-703bb31ab/", icon: faLinkedin }, { href: "https://www.instagram.com/saumya3215/", icon: faInstagram }] }} />
            <TeamCard data={{ src: Ippsa, name: "Ippsa Mahana", des: "Head of Management", social: [{ href: "https://www.linkedin.com/in/ippsa-mahana-0577b2193/", icon: faLinkedin }, { href: "https://www.instagram.com/__ippsaaa__/", icon: faInstagram }, { href: "https://twitter.com/asppi2806", icon: faTwitter }] }} />
            <TeamCard data={{ src: Anita, name: "Anita kumari Jena", des: "Women tech lead", social: [{ href: "https://www.linkedin.com/in/anitakumarijena/", icon: faLinkedin }, { href: "https://www.instagram.com/___ani_jena_714___/", icon: faInstagram }, { href: "https://twitter.com/AnitakumariJen1", icon: faTwitter }] }} />
            <TeamCard data={{ src: Snata, name: "Snata Gayan", des: "Head Of Designing", social: [{ href: "https://www.linkedin.com/in/snata-gayan-5b349b19b/", icon: faLinkedin }, { href: "https://www.instagram.com/s.n.a.t.a_/", icon: faInstagram }, { href: "https://twitter.com/GayanSnata", icon: faTwitter }] }} />
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container">
          <h2 className="text-center pt-2 pb-2">Technical Team</h2>
          <div className="border"></div>
          <div className="row">
            <TeamCard data={{ src: Atman, name: "Atman Das", des: "Web Development Lead", social: [{ href: "https://www.linkedin.com/in/atmanad/", icon: faLinkedin }, { href: "https://www.instagram.com/__gh00st/", icon: faInstagram }] }} />
            <TeamCard data={{ src: Sidharth, name: "Sidharth Bhunia", des: "Android Lead", social: [{ href: "https://www.linkedin.com/in/sidharth-bhunia-563852190", icon: faLinkedin }] }} />
            <TeamCard data={{ src: Bunny, name: "Shubham Gaurav", des: "Competitive Coding Lead", social: [{ href: "https://www.linkedin.com/in/shubham-gaurav-a86090192", icon: faLinkedin }, { href: "https://www.instagram.com/bunny_gaurav/", icon: faInstagram }] }} />
            <TeamCard data={{ src: Abhishekkumar, name: "Abhishek Kumar", des: "Android Lead(Flutter)", social: [{ href: "https://www.linkedin.com/in/abhishek-kumar-42437119b/", icon: faLinkedin }, { href: "https://www.instagram.com/iamabhishek_77/", icon: faInstagram }, { href: "https://twitter.com/iamabhishek_77", icon: faTwitter }] }} />
            <TeamCard data={{ src: Rukaiya, name: "Rukaiya Khan", des: "Web development Co-Lead", social: [{ href: "https://www.linkedin.com/in/rukaiyak/", icon: faLinkedin }, { href: "https://www.instagram.com/rukaiyak_/", icon: faInstagram }, { href: "https://twitter.com/ruk_____", icon: faTwitter }] }} />
            <TeamCard data={{ src: Snehashis, name: "Snehashis Pati", des: "Web development Co-Lead", social: [{ href: "https://www.linkedin.com/in/snehashis-pati-536bb81aa", icon: faLinkedin }, { href: " https://instagram.com/snehasish_pati?igshid=106xk4esdb4qx", icon: faInstagram }] }} />
            <TeamCard data={{ src: Samar, name: "Samar Chandra", des: "Associate Competitive Coding Lead", social: [{ href: "https://www.linkedin.com/in/samar-chandra-5255651b3/", icon: faLinkedin }, { href: "https://www.instagram.com/_i.samar/", icon: faInstagram }, { href: "https://mobile.twitter.com/SamarChandra4", icon: faTwitter }] }} />
            <TeamCard data={{ src: Yash, name: "Yahraj Jain", des: "ML Lead", social: [{ href: "https://www.linkedin.com/in/yashraj-jain-695453178/", icon: faLinkedin }, { href: "https://www.instagram.com/_infynite_/", icon: faInstagram }, { href: "https://twitter.com/yashrajjain726", icon: faTwitter }] }} />
            <TeamCard data={{ src: Amisha, name: "Amisha Kirti", des: "Associate ML Lead", social: [{ href: "https://www.linkedin.com/in/amisha-kirti-79410716a", icon: faLinkedin }, { href: "https://www.instagram.com/kirti_amisha/", icon: faInstagram }, { href: "https://mobile.twitter.com/kirtiastic", icon: faTwitter }] }} />
            <TeamCard data={{ src: Aashutosh, name: "Aashutosh Agrahari", des: "Associate ML lead", social: [{ href: "https://www.linkedin.com/in/aashutosh-agrahari-3ba6421b6", icon: faLinkedin }, { href: "https://www.instagram.com/aashutoshagrahari/", icon: faInstagram }, { href: "https://twitter.com/yashrajjain726", icon: faTwitter }] }} />
            <TeamCard data={{ src: NabaRatan, name: "Naba Ratan Patra", des: "Cyber Security Co-Lead", social: [{ href: "https://www.linkedin.com/in/naba-ratan-b904991a7/", icon: faLinkedin }] }} />
            <TeamCard data={{ src: Ramraaj, name: "Ramraaj Bishnoie", des: "Associate ML Lead", social: [{ href: "#", icon: faLinkedin }] }} />
            <TeamCard data={{ src: Rajeev, name: "Rajeev kumar", des: "Associate Android Lead", social: [{ href: "#", icon: faLinkedin }] }} />
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container">
          <h2 className="text-center pt-2 pb-2">Management Team</h2>
          <div className="border"></div>
          <div className="row">
            <TeamCard data={{ src: Bharat, name: "Bharat Shubham", des: "Manager", social: [{ href: "https://www.linkedin.com/in/bharat-shubham-6b5808190/", icon: faLinkedin }, { href: "https://www.instagram.com/bharatshubham5/?hl=en", icon: faInstagram }, { href: "https://twitter.com/BharatShubham9", icon: faTwitter }] }} />
            <TeamCard data={{ src: Divanti, name: "Divanti Neogi", des: "Editorial Manager", social: [{ href: "linkedin.com/in/divanti-neogi-20111219b", icon: faLinkedin }, { href: "https://www.instagram.com/_divss__/", icon: faInstagram }, { href: "https://twitter.com/DivantiNeogi?s=09", icon: faTwitter }] }} />
            <TeamCard data={{ src: Swapnali, name: "Swapnali Gouda", des: "Editorial Head", social: [{ href: "https://www.linkedin.com/in/swapnali-gouda-5bb7371a6/", icon: faLinkedin }, { href: "https://www.instagram.com/__cerca_trova_/", icon: faInstagram }] }} />
            <TeamCard data={{ src: Nausin, name: "Nausin Nigar", des: "Management Co-Lead", social: [{ href: "https://www.linkedin.com/in/nausin-nigar-87a0951a9", icon: faLinkedin }, { href: "https://www.instagram.com/nausin_nigar/", icon: faInstagram }, { href: "https://twitter.com/NausinNigar", icon: faTwitter }] }} />
            <TeamCard data={{ src: Saurabh, name: "Saurabh Kumar", des: "Marketing and Sponsorship Lead", social: [{ href: "https://www.linkedin.com/in/saurabh-kumar-7214aa176/", icon: faLinkedin }, { href: "https://www.instagram.com/_ska_03/", icon: faInstagram }] }} />
            <TeamCard data={{ src: Harshit, name: "P. Harshit", des: "Creatives and Photography Lead", social: [{ href: "https://www.linkedin.com/in/p-harshit-4a72621b7", icon: faLinkedin }, { href: "https://www.instagram.com/_cesar_diego_/", icon: faInstagram }, { href: "https://twitter.com/RaoHarshit2", icon: faTwitter }] }} />
            <TeamCard data={{ src: Aditi, name: "Aditi Kumari", des: "Associate Marketing and Sponsorship lead", social: [{ href: "https://www.linkedin.com/in/aditi-kumari-65797a1ab", icon: faLinkedin }, { href: "https://www.instagram.com/aditi_sah143", icon: faInstagram }] }} />
            <TeamCard data={{ src: Ashirbad, name: "Ashirbad Nayak", des: "Associate Marketing and Sponsorship lead", social: [{ href: "https://www.linkedin.com/in/ashirbad-nayak-5515491b1", icon: faLinkedin }, { href: "https://instagram.com/_a_s_n_official_", icon: faInstagram }] }} />
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container">
          <h2 className="text-center pt-2 pb-2">Public Relation Team</h2>
          <div className="border"></div>
          <div className="row">
            <TeamCard data={{ src: Abhishek, name: "Abhishek Dey", des: "Public Relation Lead", social: [{ href: "#", icon: faLinkedin }, { href: "#", icon: faInstagram }, { href: "#", icon: faTwitter }] }} />
            <TeamCard data={{ src: SagarSourav, name: "Sagar Saurav", des: "Public Relations Co-Lead", social: [{ href: "https://www.linkedin.com/in/sagar-saurav-behera-556a37136/", icon: faLinkedin }, { href: "https://www.instagram.com/the_damn_leo/", icon: faInstagram }] }} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;