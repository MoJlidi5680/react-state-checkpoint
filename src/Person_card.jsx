import React, { useState } from 'react';
import Model from './Model';

const Person_card = ({ el }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <div className='card'>
        {isModelOpen?<Model el={el} setIsModelOpen={setIsModelOpen} />:null}
        
      <img src={el.imgSrc} alt="" />
      <h1>fullName: {el.fullName}</h1>
      <h2>bio: {el.bio}</h2>
      <h2>profession: {el.profession}</h2>
      <button onClick={()=>setIsModelOpen(true)}  >click on</button>
    </div>
  );
};

export default Person_card;
