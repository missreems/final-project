import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
    console.log(animal)
    return (
      <div className="animal-show">

        <div className="animal-show-banner">
          <div className="animal-show-heading">
            <h1>{animal.name}</h1>
          </div>
        </div>

        <div className="animal-show-content-container">

          <div className="content-columns">
            <div className="content-left">
              <div className="animal-key-info">
                <div className="info-left">
                  <div>
                    <h5>Scientific Name:</h5>
                    <p>{animal.scientific_name}</p>
                  </div>
                  <div>
                    <h5>Classification:</h5>
                    <p>{animal.classification.classification_group}</p>
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

              <h4 className="habitat-container-heading">The {animal.name} lives in the:</h4>
              <div className="habitat-container">
                <Link to={`/habitats/${animal.habitats.id}`} className="habitat-card">
                  {animal.habitats.images.map(image =>
                    <img key={image.id} src={(image.image)} alt={animal.habitats.name}></img>
                  ).slice(0, 1)}
                  <h5 className="centered">{animal.habitats.name}</h5>
                </Link>
              </div>
            </div>
  
            <div className="content-right">
              <img src={animal.images[0].image} alt={animal.images[0].brief}></img>
              <div className="show-images">
                <img src={animal.images[0].image} alt={animal.images[0].brief}></img>
                <img src={animal.images[0].image} alt={animal.images[0].brief}></img> 
              </div>
            </div>
          </div>
          <div>DESCRIPTIONS</div>
        </div>
      </div>
    )
  }
}

export default AnimalShow