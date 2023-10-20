import React, { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import FastandFurious from './Components/Media/F9.jpeg';
import AvengersEndGame from './Components/Media/AvengersEndG.jpeg';
import JohnWick from './Components/Media/Johnwick.jpeg';
import SpidermanNWH from './Components/Media/SpidermanNoWayHome.jpeg';
import ThorLoveAndThunder from './Components/Media/ThorLoveAndThunder.jpeg';
import Button from 'react-bootstrap/Button';

function App() {
  const [movies, setMovies] = useState([
    // Initial movie data
    {
        title: 'fast and furious 9',
        description: 'Vin Diesels Dom Toretto is leading a quiet life off the grid with Letty and his son, little Brian, but they know that danger always lurks just over their peaceful horizon',
        posterURL: FastandFurious,
        rating: 5.0,
      },
  
      {
        title: 'Avengers End game',
        description: 'ENDGAME is set after Thanos catastrophic use of the Infinity Stones randomly wiped out half of Earths population in Avengers: Infinity War',
        posterURL: AvengersEndGame,
        rating: 4.9,
      },
  
      {
        title: 'John Wick 3',
        description: 'The film centers on John Wick going on the run from a legion of hitmen after a bounty is placed for his murder. it is a 2019 American neo-noir.',
        posterURL: JohnWick,
        rating: 4.9,
      },
  
      {
        title: 'Spider-Man: No Way Home',
        description: 'Peter Parkers secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.',
        posterURL: SpidermanNWH,
        rating: 4.6,
      },
  
      {
        title: 'thor love and thunder',
        description: ' finds the God of Thunder on a journey unlike anything he is ever faced—one of self-discovery. But his efforts are interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods.',
        posterURL: ThorLoveAndThunder,
        rating: 4.8,
      },
    // Add more movies here
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilterChange = (value, type) => {
    if (type === 'title') {
      setTitleFilter(value);
    } else if (type === 'rating') {
      setRatingFilter(value);
    }
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="bg-secondary p-3">
      <div className="container">
        <h1>Saleem's Movies List</h1>
        <div className="filter-button">
        <Filter
          handleFilterChange={handleFilterChange}
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          />
          <Button className='mt-3' onClick={() => addMovie({ title: 'New Movie', description: '', posterURL: '', rating: 0 })} variant="primary">
            Add Movie
            </Button>
          </div>
      </div>
      <MovieList 
        movies={movies.filter((movie) =>
          movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
          movie.rating >= ratingFilter
        )}
      />
    </div>
  );
}

export default App;