/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import './styles.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, updateTime, stopTimer } from '../../actions/movies';
import { formatDate } from '../utils';
import ResponseButton from './ResponseButton';
import NextMovieButton from './NextMovieButton';

function Game({ handleBeginGame, handleNextMovie, getResponses }) {
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

  // Timer
  const time = useSelector((state) => state.timer.time);
  const running = useSelector((state) => state.timer.running);

  const handleStartButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(startTimer());
  };

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        if (time === 0) {
          dispatch(stopTimer());
          clearInterval(timer);
        } else {
          dispatch(updateTime());
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  useEffect(() => {
    // everytime a movie is guessed,
    // we re-generate the responses
    getResponses();
  }, [tour]);

  // possible responses
  const responses = useSelector((state) => state.movies.responses);
  // current movie
  const movie = movies[tour];

  // if there is responses in the state
  // and there is not the current movie in the responses
  if (responses.length > 0
    && movie.id !== undefined
    && (responses.findIndex((element) => element.id === movie.id) === -1)) {
    // generating a number between 1 and 4
    const random = Math.floor(Math.random() * 4);
    // getting the id of the movie at the random index
    responses[random].id = movie.id;
    // getting the title of the movie at the random index
    responses[random].title = movie.title;
  }

  const userResponse = useSelector((state) => state.movies.userResponse);

  return (
    <div className="game">
      <div className="game__container">
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
                  <h1 className="game__score-text">Score : 0 points</h1>
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
                        responses.length > 0
                          ? responses.map((response) => (
                            <ResponseButton
                              title={response.title}
                              idResponse={response.id}
                              idCurrentMovie={movie.id}
                              key={response.id}
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
  getResponses: PropTypes.func.isRequired,
};

export default Game;
