import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'

import Header from './components/common/Header'
import Home from './components/common/Home'
import HabitatIndex from './components/habitats/HabitatIndex'
import HabitatShow from './components/habitats/HabitatShow'
import AnimalIndex from './components/animals/AnimalIndex'
import Contact from './components/common/Contact'
import About from './components/common/About'


class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/habitats/:id' component={HabitatShow} />
            <Route path='/habitats' component={HabitatIndex} />
            <Route path='/animals' component={AnimalIndex} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
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