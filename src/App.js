import { BrowserRouter, Switch, Route  } from 'react-router-dom';

//styles
import './App.css'

//import pages
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/recipes/:id'>
          <Recipe />
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
