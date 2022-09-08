import React, {useState} from 'react'
import {GrClose} from 'react-icons/gr'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import arrowDown from '../../assets/images/icon-arrow-down.svg'
import arrowUp from '../../assets/images/icon-arrow-up.svg'
import {RiTodoFill} from 'react-icons/ri'
import {AiFillCalendar, AiFillBell} from 'react-icons/ai'
import {FaPaperPlane} from 'react-icons/fa'

import './MobileMenu.css'
import MenuFeatures from '../MenuFeatures/MenuFeatures'

const MobileMenu = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showFeature, setShowFeature] = useState<boolean>(false);
  const [showCompany, setShowCompany] = useState<boolean>(false);

  const handleFocus = (arg: string) => {
    if (arg === 'feature') {
      setShowFeature(!showFeature);
    } else if (arg === 'company') {
      setShowCompany(!showCompany);
    }
  }

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="mobile-menu-container">
      <GiHamburgerMenu
        className={showMenu ? "close-hamburger" : "hamburger"}
        onClick={handleMenu}
      />
      {showMenu && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <GrClose onClick={() => setShowMenu(false)} />
            <ul>
              <li onClick={() => handleFocus("feature")}>
                Features {showFeature ? <img src={arrowUp}/> : <img src={arrowDown}/> }
              </li>
              {showFeature && (
                <div className="feature-mobile-block">
                  <div className='feature-mobile-content'>
                    <RiTodoFill className='todo'/>
                    <span>Todo List</span>
                  </div>
                  <div className='feature-mobile-content'>
                    <AiFillCalendar className='calendar'/>
                    <span>Calendar</span>
                  </div>
                  <div className='feature-mobile-content'>
                    <AiFillBell className='bell'/>
                    <span>Reminders</span>
                  </div>
                  <div className='feature-mobile-content'>
                    <FaPaperPlane className='plane'/>
                    <span>Planning</span>
                  </div>
                </div>
              )}
              <li onClick={() => handleFocus("company")}>Company {showCompany ? <img src={arrowUp}/> : <img src={arrowDown}/> }</li>
              {showCompany && (
                <div className="company-mobile-container">
                  <span>History</span>
                  <span>Our Team</span>
                  <span>Blog</span>
                </div>
              )}
              <li>Careers</li>
              <li>About</li>
            </ul>
            <div className="menu-buttons">
              <button className="btn-login-menu">Login</button>
              <button className="btn-register-menu">Register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu