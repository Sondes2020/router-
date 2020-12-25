import React,{useState} from 'react';
import './App.css';

import MoviesData from './components/MoviesData'
import MovieList from './components/MovieList'
import AddMovies from './components/AddMovies';
import MovieSearch from './components/MovieSearch';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Trailer from './components/Trailer'


function App() {
  const [moviesList,setMoviesList] = useState(MoviesData)
 const [searchByName, setsearchByName] = useState('')
 const [serchByRate, setserchByRate] = useState(0)
 
  const addMovies=(newMovies) =>{
    setMoviesList([...moviesList, newMovies])
  }
  return (
    <div className="App">
      <Router>
        <Route exact path='/' >
                <MovieSearch setsearchByName={setsearchByName} serchByRate={serchByRate} setserchByRate={setserchByRate} />
    <MovieList moviesList={moviesList} searchByName={searchByName}  serchByRate={serchByRate} /> 
    <AddMovies addMovies={addMovies} /> 
    </ Route >
    <Route path='/movie/:name' render={(props)=><Trailer {...props} />}>

    </Route>
    </Router>
    </div>
  );
}

export default App;