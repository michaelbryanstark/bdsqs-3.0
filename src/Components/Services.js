import React from "react";
import serviceBg from '../images/serviceBg.jpg'
// import data from "../data/illustrations";
// import Modal from "./Modal";



function Services() {
  return (
    <div className= 'companyBg' style={{backgroundImage:`url(${serviceBg})`}}>
        <h1 className="font-face-gm" style={{ color: 'rgba(222, 185, 146)', textAlign: 'left', marginTop: '15px', marginLeft: '30px', marginBottom: '75px'}}>
        Services
        </h1>
        <div className="wrapper">
        <div class="container">
    <div class="row">
     
            <div class="cardServices mb-3" style={{ color: 'rgba(222, 185, 146)', marginLeft: '30px', background:'rgba(15, 34, 75)', opacity: 0.79}}>
               <h3>Test</h3>
                <div class="card-body">
        <p class="text-left">
                        <ul>
                            <li>Consulting in the areas of Quality Management System gap analysis, development, and deployment.</li>  
                            
                            <li>Performance of internal (first party) and external (second party) audits to include AS 9100, ISO 9001, ISO 13485 and ANSI/ESD 20.20.</li>  
                            
                            <li>Quality training to include internal auditing, ISO 9001, and AS 9100 .</li> 
                             
                            <li>Consulting in supplier development and improvement.</li>
                            
                            <li>Web Development Services (Python, JavaScript, React, Django, PostgreSQL, Node.js, MongoDB, REST APIs, HTML, CSS, jQuery, JSON, JSON Web Tokens)</li>
                        </ul>

                        </p>
                        
                        </div>
          
              </div>
         </div>
    </div>

</div>
    </div>
)
};
export default Services;