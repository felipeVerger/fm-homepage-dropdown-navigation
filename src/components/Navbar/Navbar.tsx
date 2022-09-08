import React, {useState} from 'react';
import Logo from '../../assets/images/logo.svg'
import arrowDown from '../../assets/images/icon-arrow-down.svg'
import arrowUp from '../../assets/images/icon-arrow-up.svg'

import './Navbar.css'
import MenuFeatures from '../MenuFeatures/MenuFeatures';
import MenuCompany from '../MenuCompany/MenuCompany';
import MobileMenu from '../MobileMenu/MobileMenu';

const Navbar = () => {
  const [showFeature, setShowFeature] = useState<boolean>(false);
  const [showCompany, setShowCompany] = useState<boolean>(false);

  const handleFocus = (arg: string) => {
    if (arg === 'feature') {
      setShowFeature(!showFeature);
    } else if (arg === 'company') {
      setShowCompany(!showCompany);
    }
  }

  return (
    <div className="navbar-container">
      <div className="navbar-menu">
        <img src={Logo} alt="" />
          <ul>
            <li onClick={() => handleFocus("feature")}>Features {showFeature ? <img src={arrowUp}/> : <img src={arrowDown}/>}</li>
            {showFeature && (
                <MenuFeatures/>
            )}
            <li onClick={() => handleFocus("company")}>Company {showCompany ? <img src={arrowUp}/> : <img src={arrowDown}/>}</li>
            {showCompany && (
              <MenuCompany/>
            )}
            <li>Careers</li>
            <li>About</li>
          </ul>
      </div>
      <MobileMenu/>
      <div className="user-options">
        <button className="btn-login">Login</button>
        <button className="btn-register">Register</button>
      </div>
    </div>
  );
}

export default Navbar