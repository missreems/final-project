import React from 'react'
import axios from 'axios'


class AnimalIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      animals: null
    }
  }

  componentDidMount() {
    axios.get('/api/animals')
      .then(res => this.setState({ animals: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    const { animals } = this.state
    if (!animals) return null
    return (
      <div className="animal-index">
        <h1>A-Z Animal Index Page</h1>
        <div className="animal-index-banner"></div>
        <div  className="animal-index-card-container">
          {animals.map(animal =>
            <div key={animal.id} className="animal-index-card">{animal.name}</div>
          )}
        </div>
      </div>
    )
  }
}

export default AnimalIndex