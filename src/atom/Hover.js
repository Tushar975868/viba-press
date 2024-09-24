import React from 'react';
import './css/Hover.style.css';

const Hover = (props) => {
  return (
    <div className='hover'>
        <span className='hover-heding'>List Of Machines</span>
      <ul className='hover-ul'>
        {props.machineList.map((machineListItem, index) => (
            <li key={index}>{machineListItem}</li>
        ))} 
      </ul>
    </div>
  )
}

export default Hover;
