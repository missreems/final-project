import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      animals: null,
      classifications: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/animals')
      .then(res => this.setState({ animals: res.data }))
      .catch(err => console.log(err))

    axios.get('/api/classifications')
      .then(res => this.setState({ classifications: res.data }))
      .catch(err => console.log(err))
  }
  
  searchAnimals() {
    const { animals, search } = this.state
    const re = new RegExp(search, 'i')
    return animals.filter(animal => {
      return re.test(animal.name)
    })
  }

  handleChange(e) {
    this.searchAnimals()
    this.setState({ [e.target.name]: e.target.value })
  }
  
  

  render() {
    const { animals, classifications } = this.state
    if (!animals || !classifications) return null
    console.log(this.state)

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
              <input
                type="text"
                name="search"
                placeholder="Type animal name here..."
                onChange={this.handleChange}>
              </input>
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

// && (country.region === region || region === 'All')

{/* <Link to={`/classifications/${classification.id}`} key={classification.id}>

<div className="classification-card">
  <img src={classification.images[0].image}></img>
  <h5 className="centered">{classification.classification}</h5>
</div>
</Link> */}