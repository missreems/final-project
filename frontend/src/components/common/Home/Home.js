import React from 'react'

class Home extends React.Component {

  render() {
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

        <div className="animal-kingdom-banner">
          <div className="animal-index-heading">
            <h1>Animal Kingdom</h1>
          </div>
          <div className="animal-index-content-container">
            <div  className="animal-index-card-container"></div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home