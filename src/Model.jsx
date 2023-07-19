// Model.js
import React from 'react';

const Model = ({ el,setIsModelOpen }) => {   
  return (
    <div className="vue">
      <div className='model'>
        <button onClick={()=>setIsModelOpen(false)} >x</button>
        <img src={el.imgSrc} alt="" srcset="" />
        <h1>fullName: {el.fullName}</h1>
        <h2>profession : {el.profession} </h2>
      </div>
    </div>
  );
};

export default Model;
