import React from "react";
import data from "../data/home";



function Home() {

    return (
        <div>
            <h1 className="font-face-gm" style={{ color: '#fa7f67', textAlign: 'left', marginTop: '15px', marginLeft: '30px', marginBottom: '75px'}}>
                mike king 
            </h1>
            <div className="wrapper">
      {data.data.map((item, index) => (
        <div key={index} className="wrapper-home">
          <img
            src={item.link}
            alt={item.text}

          />
          {/* <h2 className="font-face-gm" style={{ color: '#fa7f67', textAlign: 'left', fontWeight: '100', fontSize: '15px'}}>{item.text}</h2> */}
        </div>
      ))}

    </div>
    </div>
    )
};

export default Home;