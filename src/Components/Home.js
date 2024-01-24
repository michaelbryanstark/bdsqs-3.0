import React from "react";
import data from "../data/home";



function Home() {

    return (
        <div>
            <h1 className="font-face-gm" style={{ color: 'rgba(0, 171, 252,.8)', textAlign: 'left', marginTop: '15px', marginLeft: '30px', marginBottom: '40px'}}>
                B D S Q S
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