import React from 'react'
import Person_card from './Person_card'
const Persons_cards = ({persons}) => {
  return (
    <div className='cards'>
        {
            persons.map((el)=><Person_card el={el}/>)
       
       }
      
    </div>
  )
}

export default Persons_cards
