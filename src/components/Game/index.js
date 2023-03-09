/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import './styles.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, updateTime, stopTimer } from '../../actions/movies';
import { formatDate, shuffleArray, sliceArray } from '../utils';
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

  /* ==================================
       RANDOMIZATION OF THE HINTS
  =====================================*/
  // array who will reveive the time interval
  const [array, setArray] = useState([]);
  // index for accessing the values of the array
  let index = -1;
  // this use effect will be fired everytime the state of 'running' changes
  useEffect(() => {  
    // we get all the element with the class 'game__indices-item' -> it's all the hints
    const nbIndices = [...document.querySelectorAll('.game__indices-item')];
    // variable for the periodicity of reveal
    let periodiciteIndices = 0;
    // if there is at less 1 hint
    if (nbIndices.length > 0) {
      // setting the periodicity of revealing hints :
      // 60 seconds dividing by number of hints
      periodiciteIndices = Math.floor(60 / nbIndices.length);
      // variable used to know after how many seconds the clue is revealed
      let timePassed = 60;
      // we shuffle the hints elements
      shuffleArray(nbIndices); 
      // temporary array, to store the values
      const arrayTemp = []; 
      // browsing the hints elements    
      for (let i = 0; i < nbIndices.length; i++) {
        // we put in the temps array the number of seconds for revealing the clue
        arrayTemp.push(timePassed); 
        // we subtract the periodicity
        timePassed = timePassed - periodiciteIndices;
      }
      // we randomize the values
      shuffleArray(arrayTemp);
      // and put it in the final array
      setArray(arrayTemp);
    }
  }, [running]); 


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

                {/* INDICES */}
                <div className="game__indices">
                  <div className="game__indices-container">
                    <p className="game__indices-title">Réalisateur(s) : </p>
                    <div className="game__indices-items">
                      {
                        movie.directors !== []
                          ? movie.directors.map((director) => ( 
                            // everytime we render a hint, we inscrease the index of the array of the reveal timing                           
                            <p key={director.id} className={`game__indices-item ${time <= array[++index] || running === false ? 'roll-in-blurred-left' : 'masked'}`}>
                               {director.firstname} {director.lastname}
                            </p> 
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Date de sortie : </p>
                    {/* everytime we render a hint, we inscrease the index of the array of the reveal timing */}
                    <p className={`game__indices-item ${time <= array[++index] || running === false ? 'roll-in-blurred-left' : 'masked'}`}>
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
                            // everytime we render a hint, we inscrease the index of the array of the reveal timing
                            <p key={country.name} className={`game__indices-item ${time <= array[++index] || running === false ? 'roll-in-blurred-left' : 'masked'}`}>
                              {country.name}
                            </p>
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
                            // everytime we render a hint, we inscrease the index of the array of the reveal timing
                            <p key={actor.lastname} className={`game__indices-item ${time <= array[++index] || running === false ? 'roll-in-blurred-left' : 'masked'}`}>
                              {actor.firstname} {actor.lastname}
                            </p>
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
                            // everytime we render a hint, we inscrease the index of the array of the reveal timing
                            <p key={studio.name} className={`game__indices-item ${time <= array[++index] || running === false ? 'roll-in-blurred-left' : 'masked'}`}>
                              {studio.name}
                            </p>
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
                            // everytime we render a hint, we inscrease the index of the array of the reveal timing
                            <p key={genre.name} className={`game__indices-item ${time <= array[++index] || running === false ? 'roll-in-blurred-left' : 'masked'}`}>
                              {genre.name}
                            </p>
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Synopsis : </p>
                    <div className="game__indices-items">
                      {/* everytime we render a hint, we inscrease the index of the array of the reveal timing */}
                      <p className={`game__indices-item ${time <= array[++index] || running === false ? 'roll-in-blurred-left' : 'masked'}`}>
                        {movie.synopsis}
                      </p>
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
