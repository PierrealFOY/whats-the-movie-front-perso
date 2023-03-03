import {
  UPDATE_TITLE,
  UPDATE_SYNOPSIS,
  UPDATE_RELEASE_DATE,
  UPDATE_PRODUCTION_STUDIOS,
  UPDATE_ACTORS,
  UPDATE_COUNTRIES,
  UPDATE_DIRECTORS,
  UPDATE_GENRES,
} from '../actions/formActions';
import actors from '../data/actors';
import countries from '../data/countries';
import directors from '../data/directors';
import genres from '../data/genres';
import studios from '../data/productionStudios';

const initialState = {
  title: '',
  synopsis: '',
  releaseDate: '',
  poster: '',
  productionStudios: [],
  actors: [],
  countries: [],
  directors: [],
  genres: [],
  actorsList: actors,
  studiosList: studios,
  countriesList: countries,
  directorsList: directors,
  genresList: genres,
};

export default function formReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case UPDATE_SYNOPSIS:
      return { ...state, synopsis: action.payload };
    case UPDATE_RELEASE_DATE:
      return { ...state, releaseDate: action.payload };
    case UPDATE_PRODUCTION_STUDIOS:
      return { ...state, productionStudios: state.productionStudios.concat(action.payload)}
    case UPDATE_ACTORS:
      return { ...state, actors: state.actors.concat(action.payload)}
    case UPDATE_COUNTRIES:
      return { ...state, countries: state.countries.concat(action.payload)};
    case UPDATE_DIRECTORS:
      return { ...state, directors: state.directors.concat(action.payload)};
    case UPDATE_GENRES:
      return { ...state, genres: state.genres.concat(action.payload)};

    default:
      return state;
  }
}
