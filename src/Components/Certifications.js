import React from "react";

function Certifications() {
  
    return (
        <div>
            <h1 className="font-face-gm" style={{ color: 'rgba(0, 171, 252,.8)', textAlign: 'left', marginTop: '15px', marginLeft: '30px', marginBottom: '75px'}}>
            Certifications
            </h1>
            <div className="wrapper">
            <div class="container">
            <div class="card bg-secondary mb-3" style={{ color: 'rgba(222, 185, 146)'}}>
                <div class="card-body">
                    <p class="card-text">
                        <h3>ASQ Certified Quality Auditor</h3>  
                            <p>Issuing authority ASQ - World Headquarters</p> 
                                <button type='button' className="btn btn-outline-info"onClick={()=> window.open("https://credentials.asq.org/7363e433-175b-4627-9f1a-4bef135c684e", "_blank")}>See Credential</button>
                            <br></br>
                            <br></br>

                        <h3>AS9100 Rev D and ISO 9001:2015 Lead Auditor</h3> 
                            <p>Issuing authority PROBITAS</p> 
                    </p>
                </div>
            </div>
        </div>

    </div>
        </div>
    )
};

export default Certifications;