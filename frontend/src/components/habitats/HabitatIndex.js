import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class HabitatIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      habitats: null
    }
  }

  componentDidMount() {
    axios.get('/api/habitats')
      .then(res => this.setState({ habitats: res.data }))
      .catch(err => console.log(err))
  }
  
  render() {
    console.log(this.state)
    const { habitats } = this.state
    if (!habitats) return null
    return (
      <div className="habitat-index">

        <div className="habitat-index-banner">
          <div className="habitat-index-heading">
            <h1>Habitats</h1>
          </div>
        </div>

        <div className="habitat-index-content-container">
          <div  className="habitat-index-card-container">
            {habitats.map(habitat =>
              <Link to={`/habitats/${habitat.id}`} key={habitat.id}>

                <div className="habitat-index-card">
                  <img src={habitat.images[0].image} alt={habitat.images[0].brief}></img>
                  <h5 className="centered">{habitat.name}</h5>
                </div>
              </Link>
            )}
          </div>
        </div>

      </div>
    )
  }
}

export default HabitatIndex