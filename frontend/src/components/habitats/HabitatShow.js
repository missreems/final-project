import React from 'react'
import axios from 'axios'


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

  // filterImages(id) {
  //   this.state.habitat.images.filter(image => {
  //     if (image.id === id)
  //       console.log(image)
  //   })
  // }

  render() {
    console.log(this.state)
    const { habitat } = this.state
    if (!habitat) return null
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
              <ul>
                <div>
                  <li>Habitat Category:</li>
                  <p>{habitat.name}</p>
                </div>
                <div>
                  <li>Plant types:</li>
                  <p>{habitat.plant_types}</p>
                </div>
              </ul>
              <ul>
                <div>
                  <li>Average Yearly Rainfall:</li>
                  <p>{habitat.min_rainfall} to {habitat.max_rainfall}</p>
                </div>
                <div>
                  <li>Average Temperature:</li>
                  <p>{habitat.min_temperature} to {habitat.max_temperature} &#8451;</p>
                </div>
              </ul>
            </div>
            <div>DESCRIPTIONS</div>
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