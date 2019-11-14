import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// import Nav from './components/common/Nav'  <Nav />
import Home from './components/common/Home'

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link>Habitats</Link>
            <Link>A-Z Animals</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
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