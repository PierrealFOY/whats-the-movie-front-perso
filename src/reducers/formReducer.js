import {
  UPDATE_TITLE,
  UPDATE_SYNOPSIS,
  UPDATE_RELEASE_DATE,
  UPDATE_PRODUCTION_STUDIOS,
  UPDATE_ACTORS,
  UPDATE_COUNTRIES,
  UPDATE_DIRECTORS,
  UPDATE_GENRES,
  SET_LISTS_FOR_MOVIE,
  RESET_MOVIES_INFOS,
} from '../actions/formActions';
import { toggleValue } from '../components/utils';

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
  actorsList: [],
  studiosList: [],
  countriesList: [],
  directorsList: [],
  genresList: [],
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
      return { ...state, productionStudios: toggleValue(state.productionStudios, action.payload)};
      //return { ...state, productionStudios: state.productionStudios.concat(action.payload)};
    case UPDATE_ACTORS:
      return { ...state, actors: state.actors.concat(action.payload)}
    case UPDATE_COUNTRIES:
      return { ...state, countries: state.countries.concat(action.payload)};
    case UPDATE_DIRECTORS:
      return { ...state, directors: state.directors.concat(action.payload)};
    case UPDATE_GENRES:
      return { ...state, genres: state.genres.concat(action.payload)};
    case SET_LISTS_FOR_MOVIE:
      return {
        ...state,
        actorsList: action.actors,
        countriesList: action.countries,
        directorsList: action.directors,
        genresList: action.genres,
        studiosList: action.productionStudios,
      };
    case RESET_MOVIES_INFOS:
      return {
        ...state,
        title: '',
        synopsis: '',
        releaseDate: '',
        productionStudios: [],
        actors: [],
        countries: [],
        directors: [],
        genres: [],
      };

    default:
      return state;
  }
}
