import React from 'react'

import './MenuCompany.css'

const MenuCompany = () => {

    const handleFocus = () => {
        
    }

  return (
    <div className="company-menu-block" onMouseLeave={handleFocus}>
      <div className="company-menu">History</div>
      <div className="company-menu">Our Team</div>
      <div className="company-menu">Blog</div>
    </div>
  )
}

export default MenuCompany