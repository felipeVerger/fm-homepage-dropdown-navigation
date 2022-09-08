import React from 'react'
import {RiTodoFill} from 'react-icons/ri'
import {AiFillCalendar, AiFillBell} from 'react-icons/ai'
import {FaPaperPlane} from 'react-icons/fa'

import './MenuFeatures.css'

const MenuFeatures = () => {
  return (
    <div className="feature-menu-block">
      <div className="feature-menu">
        <RiTodoFill className='todo'/>
        <span>Todo List</span>
      </div>
      <div className="feature-menu">
        <AiFillCalendar className='calendar'/>
        <span>Calendar</span>
      </div>
      <div className="feature-menu">
        <AiFillBell className='bell'/>
        <span>Reminders</span>
      </div>
      <div className="feature-menu">
        <FaPaperPlane className='plane'/>
        <span>Planning</span>
      </div>
    </div>
  );
}

export default MenuFeatures