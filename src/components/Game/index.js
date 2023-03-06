/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import './styles.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, updateTime, stopTimer } from '../../actions/movies';
import { formatDate } from '../utils';
import ResponseButton from './ResponseButton';
import NextMovieButton from './NextMovieButton';
import Loader from '../Loader';

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
  const gameStarted = useSelector((state) => state.timer.gameStarted);

  // score
  const score = useSelector((state) => state.timer.score);

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
        }
        else {
          // If time is not 0, dispatch an 'updateTime' action
          dispatch(updateTime());
        }
      }, 1000);
    }
    else {
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
      {gameStarted === false ? (
        <div className='game__ready'>
          <p className='game__ready-text'>Prêt ?!</p>
          <button type="button" className="game__ready-button" onClick={handleStartButtonClick}>Cliquez pour commencer</button>
        </div>
      ) : (
        <div className="game__container">
        {
          // if there is movies in the state, we show the elements
          movies.length > 0 && responses.length > 0
            ? (
              <>
              <div className="game__movie-infos">
                <div className="game__poster-score">
                  <div className="game__countdown">
                    <h1 className="game__countdown-timer"><span className="game__countdown-number">{time}</span>
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                        <style>{'@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'}</style>
                        <rect width="19" height="19" x="1" y="3" stroke="#0A0A30" strokeWidth="1.5" rx="8" />
                        <path stroke="#0A0A30" strokeLinecap="round" strokeWidth="1.5" d="M12.021 12l2.325 2.325" />
                        <path stroke="#265BFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.021 12V6.84" style={running ? { animation: 'rotate 2s linear infinite both', transformOrigin: 'center' } : {}} />
                      </svg>
                    </h1>
                  </div>
                  <div className="game__score">
                    <h1 className="game__score-text">Score : <span className={`game__${running === true ? 'score-number' : 'score-number-validated'}`}>{score}</span></h1>
                  </div>
                  <div className={`game__affiche ${time <= 0 || running === false ? 'roll-in-blurred-left' : 'blurred'}`}>
                    <img className="game__affiche-poster"
                    src={movie.poster} alt="Movie Poster" />
                    <h1>{movie.title}</h1>
                  </div>
                </div>
                <div className="game__indices">
                  <div className="game__indices-container">
                    <p className="game__indices-title">Réalisateur(s) : </p>
                    <div className="game__indices-items">
                      {
                        movie.directors !== []
                          ? movie.directors.map((director) => (
                            <p key={director.lastname} className={`game__indices-item ${time <= 60 || running === false ? 'roll-in-blurred-left' : 'masked'}`}>
                              {director.firstname} {director.lastname}
                            </p> 
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Date de sortie : </p>
                    <p className={`game__indices-item ${time <= 50 || running === false ? 'roll-in-blurred-left' : 'masked'}`}>
                      {
                        formatDate(movie.releaseDate)
                      }
                    </p>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Pays de production : </p>
                    <div className="game__indices-items">
                      {
                        movie.countries !== []
                          ? movie.countries.map((country) => (
                            <p key={country.name} className={`game__indices-item ${time <= 40 || running === false ? 'roll-in-blurred-left' : 'masked'}`}>{country.name}</p>
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
                            <p key={actor.lastname} className={`game__indices-item ${time <= 35 || running === false ? 'roll-in-blurred-left' : 'masked'}`}>{actor.firstname} {actor.lastname}</p>
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
                            <p key={studio.name} className={`game__indices-item ${time <= 30 || running === false ? 'roll-in-blurred-left' : 'masked'}`}>{studio.name}</p>
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
                            <p key={genre.name} className={`game__indices-item ${time <= 20 || running === false ? 'roll-in-blurred-left' : 'masked'}`}>{genre.name}</p>
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Synopsis : </p>
                    <div className="game__indices-items">
                      <p className={`game__indices-item ${time <= 10 || running === false ? 'roll-in-blurred-left' : 'masked'}`}>{movie.synopsys}</p>
                    </div>
                  </div>
                </div> 
              </div>             
                {
                  // no response given yet
                  userResponse === '' && time !== 0
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
                          timer={time}
                        />
                      </div>
                    )
                }
              </>
            )
            : <Loader />
        }
      </div>
      )}
    </div>
  );
}

Game.propTypes = {
  handleBeginGame: PropTypes.func.isRequired,
  handleNextMovie: PropTypes.func.isRequired,
};

export default Game;
