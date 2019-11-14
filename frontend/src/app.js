import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'


import Header from './components/common/Header'
import Home from './components/common/Home'
import HabitatIndex from './components/habitats/HabitatIndex'
import AnimalIndex from './components/animals/AnimalIndex'


class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        
        <Header />
       
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/habitats' component={HabitatIndex} />
            <Route path='/animals' component={AnimalIndex} />
          </Switch>
        </main>
        <footer>Footer</footer>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)