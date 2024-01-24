import React, { useState } from 'react'
// import { Collapsible } from 'collapsible-react-component'
// import 'collapsible-react-component/dist/index.css'

// import selfie from "../images/selfie.jpg"
import emailjs from 'emailjs-com'


const Contact = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
      if (name && email && message) {
        const serviceId = 'service_05hf1qj';
        const templateId = 'template_azdiyjk';
        const userId = 'GWelQe7mDCutjawxE';
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
            alert("Message Sent!");
  
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(false);
      } else {
          alert('Please fill in all fields.');
      }
  }
//   const isValidEmail = email => {
//     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return regex.test(String(email).toLowerCase());
// };

    return (
        <>
        <div>
            <div className="intro">
                <h2 className="welcome-text" style={{ color: 'rgba(0, 171, 252,.8)'}}>Contact</h2>
            </div>
                 <div>
        <>
                    <div className="container">
                        <div className="card text-white bg-secondary mb-3">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <label for="exampleFormControlInput1" className="form">Your Name</label>
                                    <input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                                    <label for="exampleFormControlInput1" className="form">Your Email</label>
                                    <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                                    <label for="exampleFormControlTextarea1" className="form">Your message</label>
                                    <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                        <div className='col text-center'>
                                            <button type='button' className="btn btn-outline-info" onClick={submit}>Send Message</button>
                                                <span className={emailSent ? 'visible' : null}></span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
                </div>
        </div>

        </>
    );
};

export default Contact;
