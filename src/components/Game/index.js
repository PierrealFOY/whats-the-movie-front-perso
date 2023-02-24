/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import './styles.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, updateTime, stopTimer } from '../../actions/movies';
import { formatDate } from '../utils';
import { ProgressBar } from 'react-bootstrap';
import ResponseButton from './ResponseButton';
import NextMovieButton from './NextMovieButton';

function Game({ handleBeginGame, handleNextMovie }) {
  // when the page loads for the first time,
  // we load the list of the movies
  useEffect(() => {
    handleBeginGame();
  }, []);

  const dispatch = useDispatch();

  // game turn number
  const tour = useSelector((state) => state.movies.tour);
  // list of the movies
  const movies = useSelector((state) => state.movies.movies);

  // timer
  const time = useSelector((state) => state.timer.time);
  const running = useSelector((state) => state.timer.running);

  // score
  const score = useSelector((state) => state.timer.score)

  const handleStartButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(startTimer());
  };

  useEffect(() => {
    // Initialize the timer variable to null
    let timer = null;
  
    // Check if the 'running' flag is true
    if (running) {
      // If running, set the timer to run every 1 second
      timer = setInterval(() => {
        // Check if the 'time' variable has reached 0
        if (time === 0) {
          // If time is 0, dispatch a 'stopTimer' action and clear the timer
          dispatch(stopTimer());
          clearInterval(timer);
        } else {
          // If time is not 0, dispatch an 'updateTime' action
          dispatch(updateTime());
        }
      }, 1000);
    } else {
      // If not running, clear the timer
      clearInterval(timer);
    }
  
    // Return a cleanup function that clears the timer
    return () => clearInterval(timer);
  }, [running, time]);

  // possible responses
  const responses = useSelector((state) => state.movies.responses);
  const response = responses[tour];

  // current movie
  const movie = movies[tour];

  const userResponse = useSelector((state) => state.movies.userResponse);

  return (
    <div className="game">
      <div className="game__container">
      <ProgressBar now={60} />
        {
          // if there is movies in the state, we show the elements
          movies.length > 0 && responses.length > 0
            ? (
              <>
                <div>
                  <button type="button" className="game__bouton-start" onClick={handleStartButtonClick}>Commencer la partie</button>
                </div>
                <div className="game__countdown">
                  <h1 className="game__countdown-timer">Timer: <span className="game__countdown-number">{time}</span></h1>
                </div>
                <div className="game__score">
                  <h1 className="game__score-text">Score : {score}</h1>
                </div>
                <div className="game__affiche">
                  <img className="game__affiche-poster" src={movie.poster} alt="Movie Poster" />
                  <h1>{movie.title}</h1>
                </div>
                <div className="game__indices">
                  <div className="game__indices-container">
                    <p className="game__indices-title">Réalisateur(s) : </p>
                    <div className="game__indices-items">
                      {
                        movie.directors !== []
                          ? movie.directors.map((director) => (
                            <p key={director.lastname} className={`game__indices-item ${time <= 50 ? '' : 'masked'}`}>
                              {director.firstname} {director.lastname}
                            </p>
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Date de sortie : </p>
                    <p className={`game__indices-item ${time <= 40 ? '' : 'masked'}`}>
                      {
                        formatDate(movie.realeaseDate)
                      }
                    </p>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Pays de production : </p>
                    <div className="game__indices-items">
                      {
                        movie.countries !== []
                          ? movie.countries.map((country) => (
                            <p key={country.name} className={`game__indices-item ${time <= 30 ? '' : 'masked'}`}>{country.name}</p>
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Acteurs/Actrices : </p>
                    <div className="game__indices-items">
                      {
                        movie.actors !== []
                          ? movie.actors.map((actor) => (
                            <p key={actor.lastname} className={`game__indices-item ${time <= 35 ? '' : 'masked'}`}>{actor.firstname} {actor.lastname}</p>
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Studio(s) de production : </p>
                    <div className="game__indices-items">
                      {
                        movie.productionStudios !== []
                          ? movie.productionStudios.map((studio) => (
                            <p key={studio.name} className={`game__indices-item ${time <= 20 ? '' : 'masked'}`}>{studio.name}</p>
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Genre(s) : </p>
                    <div className="game__indices-items">
                      {
                        movie.genres !== []
                          ? movie.genres.map((genre) => (
                            <p key={genre.name} className={`game__indices-item ${time <= 10 ? '' : 'masked'}`}>{genre.name}</p>
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Synopsis : </p>
                    <div className="game__indices-items">
                      <p className={`game__indices-item ${time <= 5 ? '' : 'masked'}`}>{movie.synopsys}</p>
                    </div>
                  </div>
                </div>
                {
                  // no response given yet
                  userResponse === ''
                    ? (
                      <div className="game__responses">
                        {
                        response.length > 0
                          ? response.map((item) => (
                            <ResponseButton
                              title={item.title}
                              idResponse={item.id}
                              idCurrentMovie={movie.id}
                              key={item.id}
                            />
                          ))
                          : undefined
                        }
                      </div>
                    )
                    : (
                      <div className="game__next-movie">
                        <NextMovieButton
                          tour={tour}
                          handleNextMovie={handleNextMovie}
                          userResponse={userResponse}
                        />
                      </div>
                    )
                }
              </>
            )
            : undefined
        }
      </div>
    </div>
  );
}

Game.propTypes = {
  handleBeginGame: PropTypes.func.isRequired,
  handleNextMovie: PropTypes.func.isRequired,
};

export default Game;
