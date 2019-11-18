import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <footer>

        <div className="footer-top">
          <div className="social-media-icons">
            <i className="fab fa-twitter-square fa-2x"></i>
            <i className="fab fa-instagram fa-2x"></i>
            <i className="fab fa-facebook-square fa-2x"></i>
            <i className="fab fa-google-plus-square fa-2x"></i>
          </div>
          <div className="footer-nav">
            <h3>Explore Animalia</h3>
            <div>
              <Link>Home</Link>
              <Link>Habitats</Link>
              <Link>Animals</Link>
              <Link>Contact</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&#169; 2019 Animalia by Reema Patel</p>
        </div>

      </footer>
    )
  }
}

export default Footer