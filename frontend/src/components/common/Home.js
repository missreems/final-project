import React from 'react'

class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <div className="home-banner">COLLECTIONS</div>

        <div className="search-banner">
          <div className="search-container">
            <input type="text" placeholder="Type animal name here..."></input>
            <button type="submit">Search Animals</button>
          </div>
        </div>

        <div className="popular-animals-banner"></div>
        <div>content</div>

      </div>
    )
  }
}

export default Home