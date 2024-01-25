import React from "react";
import bryan from '../images/bryan.jpg'
import mike from '../images/mike.jpg'

function Secret() {
    return (
        <div>
            <h1 className="font-face-gm" style={{ color: 'rgba(0, 171, 252,.8)', textAlign: 'left', marginTop: '15px', marginLeft: '30px', marginBottom: '75px'}}>
            Company
            </h1>
            <div className="company">
                    <div className="about">
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col">
                                <div className="card text-center h-100" style={{ color: 'rgba(222, 185, 146)', background:'rgba(15, 34, 75)'}}>
                                    <div className="image">
                                        <img className="profilePicBryan" src={bryan} alt="bryan"/>
                                    </div>
                                <div className="card-body">
                                    <h3 className="card-title">Bryan Stark</h3>
                                        <p className="card-text">Bryan, the founder of the company, has over 15 years of experience in Supervisor/Quality Engineering roles in Computer Engineering, Semiconductor, & Aerospace Industry.</p>
                                </div>
                            </div>
                        </div>
                    <div className="col">
                        <div className="card text-center h-100" style={{ color: 'rgba(222, 185, 146)', background:'rgba(15, 34, 75)'}}>
                            <div className="image">
                                <img className="profilePicMike" src={mike} alt="mike"/>
                            </div>
                        <div className="card-body">
                            <h3 className="card-title">Michael Stark</h3>
                                <p className="card-text">Software Engineer and Web Developer, Michael has 10+ years in project management and has overseen the developement and deployment of numerous apps across the web.</p>
                        </div>
                            <div>
                                <button type='button' className="btn btn-outline-info" style={{ color: 'rgba(222, 185, 146)'}} onClick={()=> window.open("https://www.michaelbryanstark.com/", "_blank")}>Visit Portfolio </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Secret;