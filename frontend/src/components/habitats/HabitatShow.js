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
    console.log(this.props.match.params)
    axios.get('/api/habitats')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    const { habitat } = this.state
    if (!habitat) return null
    return (
      <div className="habitat-show">
        <h1>Habitat Show Page</h1>
        <div className="habitat-show-bkg-top"></div>
        <div className="habitat-show-bkg-bottom"></div>
      </div>
    )
  }
}

export default HabitatShow