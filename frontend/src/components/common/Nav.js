import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/habitats'>Habitats</Link>
        <Link to='/animals'>A-Z Animals</Link>
      </nav>
    )
  }
}

export default withRouter(Nav)