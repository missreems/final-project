import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      classifications: null
    }

  }

  componentDidMount() {
    axios.get('/api/classifications')
      .then(res => this.setState({ classifications: res.data }))
      .catch(err => console.log(err))
  }



  render() {
    const { classifications } = this.state
    if (!classifications) return null
    console.log(this.state)

    return (
      <div className="home">
        <div className="collections-banner">
          <div className="collections-heading">
            <h1>COLLECTIONS COMING SOON!</h1>
          </div>
          <div className="chevron-scroll">
            <p>Scroll down</p>
            <a href="#chevron">
              <i className="fas fa-chevron-down fa-3x"></i>
            </a>
          </div>
        </div>

        <div className="classification-banner">
          <div className="classification-heading">
            <h1>Animal Kingdom</h1>
          </div>
          <div className="classification-card-container">
            {classifications.map(classification =>
              <Link to='#' key={classification.id}>

                <div className="classification-card">
                  <h5 className="centered">{classification.classification}</h5>
                </div>
              </Link>
            )}
          </div>
        </div>



      </div>
    )
  }
}

export default Home
