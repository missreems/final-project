import React from 'react'
import axios from 'axios'


class HabitatShow extends React.Component {
  constructor() {
    super()

    this.state = {
      habitat: null,
      url: ''
    }
  }

  componentDidMount() {
    const habitatId = this.props.match.params.id
    axios.get(`/api/habitats/${habitatId}`)
      .then(res => this.setState({ habitat: res.data, url: res.data.images[0].image }))
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
        
        <div className="habitat-show-bkg-top"></div>
        {/* <div className="habitat-show-bkg-bottom"></div> */}

        <div className="habitat-show-content-container">

          <div className="habitat-show-content-left">
            <div className="habitat-show-text">
              <div>
                <h5>Habitat Category:</h5>
                <p>{habitat.name}</p>
              </div>
              <div>
                <h5>Average Yearly Rainfall:</h5>
                <p>{habitat.min_rainfall} to {habitat.max_rainfall}</p>
              </div>
              <div>
                <h5>Average Temperature:</h5>
                <p>{habitat.min_temperature} to {habitat.max_temperature} &#8451;</p>
              </div>
              <div>
                <h5>Plant types:</h5>
                <p>{habitat.plant_types}</p>
              </div>
              {habitat.descriptions.map(description =>
                <div className="description-layout" key={description.id}>
                  <h5>{description.heading}</h5>
                  <p>{description.info}</p>
                </div>
              )}
            </div>
          </div>


          <div className="habitat-show-content-right">
            <div className="habitat-show-heading">
              <h1>{habitat.name}</h1>
            </div>

            <div className="habitat-show-image">
              <img src={habitat.images[1].image}></img>
            </div>

            <div className="habitat-show-images">
              <img src={habitat.images[2].image}></img>
              <img src={habitat.images[2].image}></img>
            </div>
          </div>



          
        </div>
      </div>
    )
  }
}

export default HabitatShow