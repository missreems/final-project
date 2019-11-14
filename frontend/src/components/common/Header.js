import React from 'react'

import Nav from './Nav'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-top">
          <Nav />
        </div>
        <div className="header-bottom">
          <h1>ANIMALIVE</h1>
        </div>
      </header>
    )
  }
}

export default Header