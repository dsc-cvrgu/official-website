import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/team.css";
import LazyLoad from 'react-lazyload'
import Spinner from './spinner'

function TeamCard(props) {
    return (
        <div className="col-11 col-sm-6 col-md-4 col-lg-3 mx-auto my-4">
            <div className="card pb-4 px-3 mx-auto team-card text-center">
                <div className='filler' />
                <LazyLoad placeholder={<Spinner />} once={true} offset={[-90, 100]}>
                    <img src={props.data.src} alt={props.data.name} className="mx-auto img-fluid rounded-circle mb-2 mt-3 z-depth-1" />
                </LazyLoad>
                <div className='filler' />
                <div className="card-body py-3 px-0">
                    <h4 className="text-capitalize">{props.data.name}</h4>
                    <div className="card-title">
                        <h5 className="text-center mt-3">{props.data.des}</h5>
                    </div>
                </div>
                <div className="team-icons d-flex justify-content-center">
                    {props.data.social.map(arr => {
                        return (
                            <a href={arr.href} target="_blank" rel="noopener noreferrer" key={Math.random()}>
                                <FontAwesomeIcon icon={arr.icon} size="2x" className={arr.icon.iconName} />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeamCard