import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
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
    console.log(this.state)
    const { classifications } = this.state
    if (!classifications) return null
    return (
      <div className="home">
        <div className="collections-banner">
          <div className="collections-heading">
            <h1>COLLECTIONS COMING SOON!</h1>
          </div>
          <a href="#chevron">
            <i className="fas fa-chevron-down fa-3x"></i>
          </a>
          
        </div>

        <a id="chevron">
          <div className="search-banner">
            <div className="search-container">
              <input type="text" placeholder="Type animal name here..."></input>
              <button type="submit">Search Animals</button>
            </div>
          </div>
        </a>

        <div className="classification-banner">
          <div className="classification-heading">
            <h1>Animal Kingdom</h1>
          </div>
          <div  className="classification-card-container">
            {classifications.map(classification =>
              <Link to="#" key={classification.id}>

                <div className="classification-card">
                  {/* <img src={classification.images[0].image}></img> */}
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

// Link -- to={`/classifications/${classification.id}`}