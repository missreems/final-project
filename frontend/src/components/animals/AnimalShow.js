import React from 'react'
import axios from 'axios'


class AnimalShow extends React.Component {
  constructor() {
    super()

    this.state = {
      animal: null
    }
    this.diets = {
      HE: 'Herbivore',
      OM: 'Omnivore',
      CA: 'Carnivore'
    }
  }

  componentDidMount() {
    const animalId = this.props.match.params.id
    axios.get(`/api/animals/${animalId}`)
      .then(res => this.setState({ animal: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    
    const { animal } = this.state
    if (!animal) return null
    console.log(this.state.animal.diet)
    return (
      <div className="animal-show">

        <div className="animal-show-banner">
          <div className="animal-show-heading">
            <h1>{animal.name}</h1>
          </div>
        </div>

        <div className="animal-show-content-container">

          <div className="content-left">
            <div className="animal-key-info">
              <div className="info-left">
                <div>
                  <h5>Scientific Name:</h5>
                  <p>{animal.scientific_name}</p>
                </div>
                <div>
                  <h5>Classification:</h5>
                  <p>{animal.classification.classification}</p>
                </div>
                <div>
                  <h5>Habitat:</h5>
                  <p>{animal.habitats.name}</p>
                </div>
                <div>
                  <h5>Diet:</h5>
                  <p>{this.diets[animal.diet]}</p>
                </div>
              </div>
              <div className="info-right">
                <div>
                  <h5>Average Lifespan:</h5>
                  <p>{animal.average_lifespan} years</p>
                </div>
                <div>
                  <h5>Size:</h5>
                  <p>{animal.size} {animal.size_unit}</p>
                </div>
                <div>
                  <h5>Weight:</h5>
                  <p>{animal.weight} {animal.weight_unit}</p>
                </div>
              </div>
            </div>
            <div className="did-you-know">
              <h3>Did you know?</h3>
              <p>{animal.fact}</p>
            </div>
            <div>DESCRIPTIONS</div>
          </div>

          <div className="content-right">
            <img src={animal.images[0].image}></img>
            <div className="show-images">
              <img src={animal.images[0].image}></img>
              <img src={animal.images[0].image}></img> 
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AnimalShow