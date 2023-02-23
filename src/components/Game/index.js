import PropTypes from 'prop-types';
import './styles.scss';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatDate } from '../utils';

function Game({ handleResponse, getResponses }) {
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    handleResponse();
  };

  const tour = useSelector((state) => state.movies.tour);
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    getResponses();
  }, [tour]);

  const responses = useSelector((state) => state.movies.responses);
  const movie = movies[tour];

  if (responses.length > 0 && (responses.findIndex((element) => element.id === movie.id) === -1)) {
    const random = Math.floor(Math.random() * 4);
    responses[random].id = movie.id;
    responses[random].title = movie.title;
  }

  return (
    <div className="game">
      <div className="game__container">
        {
          // if there is movies in the state, we show the elements
          movies.length > 0
            ? (
              <>
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
                            <p key={director.lastname} className="game__indices-item masked">{director.firstname} {director.lastname}</p>
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Date de sortie : </p>
                    <p className="game__indices-item masked">
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
                            <p key={country.name} className="game__indices-item masked">{country.name}</p>
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
                            <p key={actor.lastname} className="game__indices-item masked">{actor.firstname} {actor.lastname}</p>
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
                            <p key={studio.name} className="game__indices-item masked">{studio.name}</p>
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
                            <p key={genre.name} className="game__indices-item masked">{genre.name}</p>
                          ))
                          : undefined
                      }
                    </div>
                  </div>
                  <div className="game__indices-container">
                    <p className="game__indices-title">Synopsis : </p>
                    <div className="game__indices-items">
                      <p className="game__indices-item masked">{movie.synopsys}</p>
                    </div>
                  </div>
                </div>
                <div className="game__responses">
                  {
                    responses.length > 0
                      ? responses.map((response) => (
                        <Button
                          key={response.id}
                          className="game__responses-button col-10 col-sm-5"
                          variant="outline-success"
                          size="lg"
                          onClick={tour !== 4 ? handleButtonClick : null}
                        >
                          {
                            tour === 4 ? <NavLink to="/results">{response.title}</NavLink> : response.title
                          }
                        </Button>
                      ))
                      : undefined
                  }
                  {/* <Button
                    className="game__responses-button col-10 col-sm-5"
                    variant="outline-success"
                    size="lg"
                    onClick={tour !== 4 ? handleButtonClick : null}
                  >
                    {
                      tour === 4 ? <NavLink to="/results">Matrix</NavLink> : 'Matrix'
                    }
                  </Button>
                  <Button
                    className="game__responses-button col-10 col-sm-5"
                    variant="outline-success"
                    size="lg"
                    onClick={tour !== 4 ? handleButtonClick : null}
                  >
                    {
                      tour === 4
                      ? <NavLink to="/results">La Soupe Aux Choux</NavLink>
                      : 'La Soupe Aux Choux'
                    }
                  </Button>
                  <Button
                    className="game__responses-button col-10 col-sm-5"
                    variant="outline-success"
                    size="lg"
                    onClick={tour !== 4 ? handleButtonClick : null}
                  >
                    {
                      tour === 4 ? <NavLink to="/results">Avatar 2</NavLink> : 'Avatar 2'
                    }
                  </Button>
                  <Button
                    className="game__responses-button col-10 col-sm-5"
                    variant="outline-success"
                    size="lg"
                    onClick={tour !== 4 ? handleButtonClick : null}
                  >
                    {
                      tour === 4 ? <NavLink to="/results">Camping</NavLink> : 'Camping'
                    }
                  </Button> */}
                </div>
              </>
            )
            : undefined
        }
      </div>
    </div>
  );
}

Game.propTypes = {
  handleResponse: PropTypes.func.isRequired,
  getResponses: PropTypes.func.isRequired,
};

export default Game;
