import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'


import Nav from './components/common/Nav'
import Home from './components/common/Home'
import HabitatIndex from './components/habitats/HabitatIndex'
import AnimalIndex from './components/animals/AnimalIndex'


class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/habitats' component={HabitatIndex} />
            <Route path='/animals' component={AnimalIndex} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)