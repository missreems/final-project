import React from 'react'
import axios from 'axios'


class AnimalShow extends React.Component {
  constructor() {
    super()

    this.state = {
      animal: null
    }
  }

  componentDidMount() {
    const animalId = this.props.match.params.id
    axios.get(`/api/animals/${animalId}`)
      .then(res => this.setState({ animal: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    const { animal } = this.state
    if (!animal) return null
    return (
      <div className="animal-show">
        <h1>Animal Show Page</h1>
        <div className="animal-show-bkg-top"></div>
        <div className="animal-show-bkg-bottom"></div>
      </div>
    )
  }
}

export default AnimalShow