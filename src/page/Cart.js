
import React, { useState } from "react";
import "./Card.css";

export const Cart = (props) => {
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardClick = (index) => {
    
    setClickedCard(clickedCard === index ? null : index);
  };

  const receiveData = props.data.map((data, index) => (
    <div
      key={index}
      className={`col-sm-6 ${clickedCard === index ? "zoomed" : ""}`}
      onClick={() => handleCardClick(index)}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Project_Title</h5>
          <p className="card-text">{data.Project_Title}</p>
          <h5 className="card-title">Project_Technologies</h5>
          <p className="card-text">{data.Project_Technologies}</p>
          <h5 className="card-title">Technical_Skillset_Frontend</h5>
          <p className="card-text">{data.Technical_Skillset_Frontend}</p>
          <h5 className="card-title">Technical_Skillset_Backend</h5>
          <p className="card-text">{data.Technical_Skillset_Backend}</p>
          <h5 className="card-title">Technical_Skillset_Databases</h5>
          <p className="card-text">{data.Technical_Skillset_Databases}</p>
          <h5 className="card-title">Technical_Skillset_Infrastructre</h5>
          <p className="card-text">{data.Technical_Skillset_Infrastructre}</p>
        </div>
      </div>
    </div>
  ));

  return <div className="row">{receiveData}</div>;
};
