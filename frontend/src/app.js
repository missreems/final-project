import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'

import Header from './components/common/Header'
import Home from './components/common/Home/Home'
import HabitatIndex from './components/habitats/HabitatIndex'
import HabitatShow from './components/habitats/HabitatShow'
import AnimalIndex from './components/animals/AnimalIndex'
import AnimalShow from './components/animals/AnimalShow'
import Contact from './components/common/Contact'
import Footer from './components/common/Footer'


class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/animals/:id' component={AnimalShow} />
            <Route path='/habitats/:id' component={HabitatShow} />
            <Route path='/habitats' component={HabitatIndex} />
            <Route path='/animals' component={AnimalIndex} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)