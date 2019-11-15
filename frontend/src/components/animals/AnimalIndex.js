import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class AnimalIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      animals: null
    }
    this.letters = {
      A: 'A',
      B: 'B',
      C: 'C',
      D: 'D',
      E: 'E',
      F: 'F',
      G: 'G',
      H: 'H',
      I: 'I',
      J: 'J',
      K: 'K',
      L: 'L',
      M: 'M',
      N: 'N',
      O: 'O',
      P: 'P',
      Q: 'Q',
      R: 'R',
      S: 'S',
      T: 'T',
      U: 'U',
      V: 'V',
      W: 'W',
      X: 'X',
      Y: 'Y',
      Z: 'Z'
    }

    this.handleClick = this.handleClick.bind(this)

    // sorting animals into alphabetical order
    // const sortedArray = [...this.state.animals].sort((a, b) => a.name > b.name)
  }

  componentDidMount() {
    axios.get('/api/animals')
      .then(res => this.setState({ animals: res.data }))
      .catch(err => console.log(err))
  }

  // filter animals according to the letter clicked
  handleClick(letter){
    return this.state.animals.filter(animal => animal.charAt(0) === letter)
  }
  

  render() {
    console.log(this.state)
    const { animals } = this.state
    if (!animals) return null
    return (
      <div className="animal-index">
        <div className="animal-index-banner"></div>

        <div className="animal-index-content-container">
          <div className="animal-index-heading">
            <h1>Habitats</h1>
          </div>
          <div className="alphabet-buttons">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div onClick={this.handleClick}>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
            <div>I</div>
            <div>J</div>
            <div>K</div>
            <div>L</div>
            <div>M</div>
            <div>N</div>
            <div>O</div>
            <div>P</div>
            <div>Q</div>
            <div>R</div>
            <div>S</div>
            <div>T</div>
            <div>U</div>
            <div>V</div>
            <div>W</div>
            <div>X</div>
            <div>Y</div>
            <div>Z</div>
          </div>
          <div  className="animal-index-card-container">
            {animals.map(animal =>
              <Link to={`/animals/${animal.id}`} key={animal.id} className="animal-index-card">{animal.name}</Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AnimalIndex