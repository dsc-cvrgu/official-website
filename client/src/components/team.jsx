import React, { useEffect } from "react";

// components
import Footer from "./footer";
import TeamCard from "./TeamCard.jsx"

// local css
import "../css/team.css";

// Team data
import { Lead, Faculties, Board_members, Technical_team, Design_team, Management_team, Public_relation_team } from '../data/Team_Data.js'

const Team = (state) => {
  useEffect(() => {
    document.title = "DSC CVRGU | Team";
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <section id="team" style={{ margin: '70px auto auto auto' }}>
        <div className="container">
          <h2 className="py-2 text-center">DSC Lead</h2>
          <div className="border"></div>
          <div className="row text-center">
            <TeamCard data={Lead} />
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container text-center">
          <h2 className="text-center pt-2 pb-2">Faculties</h2>
          <div className="border"></div>
          <div className="row">
            {
              Faculties.map(member => <TeamCard key={Math.random()} data={member} />)
            }
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container text-center">
          <h2 className="text-center pt-2 pb-2">Board Members</h2>
          <div className="border"></div>
          <div className="row">
            {
              Board_members.map(member => <TeamCard key={Math.random()} data={member} />)
            }
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container">
          <h2 className="text-center pt-2 pb-2">Technical Team</h2>
          <div className="border"></div>
          <div className="row">
            {
              Technical_team.map(member => <TeamCard key={Math.random()} data={member} />)
            }
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container">
          <h2 className="text-center pt-2 pb-2">Design Team</h2>
          <div className="border"></div>
          <div className="row">
            {
              Design_team.map(member => <TeamCard key={Math.random()} data={member} />)
            }
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container">
          <h2 className="text-center pt-2 pb-2">Management Team</h2>
          <div className="border"></div>
          <div className="row">
            {
              Management_team.map(member => <TeamCard key={Math.random()} data={member} />)
            }
          </div>
        </div>
      </section>

      <section id="team" className="my-4">
        <div className="container">
          <h2 className="text-center pt-2 pb-2">Public Relation Team</h2>
          <div className="border"></div>
          <div className="row">
            {
              Public_relation_team.map(member => <TeamCard key={Math.random()} data={member} />)
            }
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;