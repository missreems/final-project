import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class AnimalIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      animals: null, 
      chosenLetter: ''
    }

    this.alphabet = []
  

    this.handleClick = this.handleClick.bind(this)
    

   
  }

  // create alphabet array
  populateAlphabet() {
    for ( let i = 65; i < 91; i++) {
      const letter = String.fromCharCode(i)
      this.alphabet.push(letter)
    }
  }

  componentDidMount() {
    this.populateAlphabet()
    axios.get('/api/animals')
      .then(res => this.setState({ animals: res.data }))
      .catch(err => console.log(err))
  }

  handleClick(e){
    this.setState({ chosenLetter: e.target.value })
  }

  // filter animals according to the letter clicked
  filteredAnimals() {
    const { animals, chosenLetter } = this.state
    const sortedArray = [...animals]
    sortedArray.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log(sortedArray)
    return sortedArray.filter(animal => {
      if (animal.name.charAt(0) === chosenLetter || chosenLetter === '')
        return animal
    })
  }
  
  render() {
    console.log(this.state)
    const { animals } = this.state
    if (!animals) return null
    return (
      <div className="animal-index">

        <div className="animal-index-banner">
          <div className="animal-index-heading">
            <h1>Animals</h1>
          </div>
        </div>

        <div className="animal-index-content-container">
          <div className="alphabet-buttons">
            {this.alphabet.map((letter, i) => <button onClick={this.handleClick} key={i} value={letter}>{letter}</button>)}
          </div>

          <div  className="animal-index-card-container">
            {this.filteredAnimals().map(animal =>
              <Link to={`/animals/${animal.id}`} key={animal.id}>
                <div className="animal-index-card">
                  <img src={animal.images[0].image} alt={animal.images[0].brief}></img>
                  <h5 className="centered">{animal.name}</h5>
                </div>
              </Link>
            )}
          </div>

        </div>
      </div>
    )
  }
}

export default AnimalIndex