import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class HabitatShow extends React.Component {
  constructor() {
    super()

    this.state = {
      habitat: null
    }
  }

  componentDidMount() {
    const habitatId = this.props.match.params.id
    axios.get(`/api/habitats/${habitatId}`)
      .then(res => this.setState({ habitat: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { habitat } = this.state
    if (!habitat) return null
    console.log(this.state)
    return (
      <div className="habitat-show">

        <div className="habitat-show-banner">
          <div className="habitat-show-heading">
            <h1>{habitat.name}</h1>
          </div>
        </div>

        <div className="habitat-show-content-container">
          <div className="content-left">
            <div className="habitat-key-info">
              <div className="info-left">
                <div>
                  <h5>Habitat Category:</h5>
                  <p>{habitat.name}</p>
                </div>
                <div>
                  <h5>Plant types:</h5>
                  <p>{habitat.plant_types}</p>
                </div>
              </div>
              <div className="info-right">
                <div>
                  <h5>Average Yearly Rainfall:</h5>
                  <p>{habitat.min_rainfall} to {habitat.max_rainfall}mm</p>
                </div>
                <div>
                  <h5>Average Temperature:</h5>
                  <p>{habitat.min_temperature} to {habitat.max_temperature} &#8451;</p>
                </div>
              </div>
            </div>
            <div className="descriptions">
              {habitat.descriptions.map(description => 
                <div key={description.id}>
                  <h4>{description.heading}</h4>
                  <p>{description.info}</p>
                </div>
              )}
            </div>
            <h4 className="animals-container-heading">Animals found in the {habitat.name}:</h4>
            <div className="animals-container">
              {habitat.animals.map(animal =>
                <Link to={`/animals/${animal.id}`} key={animal.id} className="animal-card">
                  <img src={animal.images.map(image => image.image)} alt={animal.name}></img>
                  <h5 className="centered">{animal.name}</h5>
                </Link>
              ).slice(0, 6)}
            </div>
          </div>

          <div className="content-right">
            <img src={habitat.images[2].image}></img>
            <div className="show-images">
              <img src={habitat.images[1].image}></img>
              <img src={habitat.images[0].image}></img> 
            </div>
          </div>
        </div>

        
      </div>
    )
  }
}

export default HabitatShow