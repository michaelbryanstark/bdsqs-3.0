
import React, { useState } from "react";
import emailjs from 'emailjs-com'

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_2rh69zk';
      const templateId = 'template_ighzcwc';
      const userId = 'GWelQe7mDCutjawxE';
      const templateParams = {
          name,
          email,
          message
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
          .then(response => console.log(response))
          .then(error => console.log(error))
          alert("Message Sent");

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(false);
    } else {
        alert('Please fill in all fields.');
    }
}

  return (
    <>
     <h1 className="font-face-gm" style={{ color: '#fa7f67', padding: '10px'}}>
            Contact
        </h1>
    <section id="contact" className="relative pt-20">
      <div className="text-center py-5 mb-20">

    <div className="container px-10 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-blue-100 relative px-4 py-2 rounded shadow-md">
            <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
              <h2 className="font-face-gm" style={{ color: '#fa7f67', padding: '10px'}}>
                Email
              </h2>
              <p className="text-[#1BA098] leading-relaxed">
                mike.king@farts.com
              </p>
              <h2 className="font-face-gm" style={{ color: '#fa7f67', padding: '10px'}}>
                Phone
              </h2>
              <p className="text-[#1BA098] leading-relaxed">
                512.888.5026
              </p>
            </div>
          </div>
        </div>
        <h2 className="font-face-gm" style={{ color: '#fa7f67', padding: '10px'}}>
            Get In Touch
          </h2>
        <div name="contact" className="">
          <div className="relative mb-4 border-gray-700">
            <label htmlFor="name" className="leading-7 text-lg text-[#DEB992]" style={{ color: '#fa7f67', padding: '10px'}}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-blue-100 rounded border border-gray-700 focus:border-[#1BA098] focus:ring-2 focus:ring-[#1BA098] text-[#061624] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-[#DEB992]" style={{ color: '#fa7f67', padding: '10px'}}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-blue-100 rounded border border-gray-700 focus:border-[#1BA098] focus:ring-2 focus:ring-[#1BA098] text-[#061624] outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-[#DEB992]" style={{ color: '#fa7f67', padding: '10px'}}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-blue-100 rounded border border-gray-700 focus:border-[#1BA098] focus:ring-2 focus:ring-[#1BA098] h-32 text-[#061624] outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message} onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-[#1BA098] border-0 py-2 px-6 focus:outline-none hover:bg-[#DEB992] rounded text-lg" onClick={submit}>
            Submit
          </button>
          <span className={emailSent ? 'visible' : null}></span>
        </div>
      </div>
      </div>
    </section>
    </>
  );
}