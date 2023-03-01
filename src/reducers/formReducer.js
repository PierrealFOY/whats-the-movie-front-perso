import {
  UPDATE_TITLE,
  UPDATE_SYNOPSIS,
  UPDATE_RELEASE_DATE,
  UPDATE_PRODUCTION_STUDIO_1,
  UPDATE_PRODUCTION_STUDIO_2,
  UPDATE_ACTOR_1,
  UPDATE_ACTOR_2,
  UPDATE_ACTOR_3,
  UPDATE_ACTOR_4,
  UPDATE_ACTOR_5,
  UPDATE_COUNTRY_1,
  UPDATE_COUNTRY_2,
  UPDATE_COUNTRY_3,
  UPDATE_REALISATOR_1,
  UPDATE_REALISATOR_2,
  UPDATE_GENRE_1,
  UPDATE_GENRE_2,
  UPDATE_GENRE_3,
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
  productionStudio1: 0,
  productionStudio2: 0,
  actor1: 0,
  actor2: 0,
  actor3: 0,
  actor4: 0,
  actor5: 0,
  country1: 0,
  country2: 0,
  country3: 0,
  realisator1: 0,
  realisator2: 0,
  genre1: 0,
  genre2: 0,
  genre3: 0,
  poster: 0,
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
    case UPDATE_PRODUCTION_STUDIO_1:
      return { ...state, productionStudio1: action.payload };
    case UPDATE_PRODUCTION_STUDIO_2:
      return { ...state, productionStudio2: action.payload };
    case UPDATE_ACTOR_1:
      return { ...state, actor1: action.payload };
    case UPDATE_ACTOR_2:
      return { ...state, actor2: action.payload };
    case UPDATE_ACTOR_3:
      return { ...state, actor3: action.payload };
    case UPDATE_ACTOR_4:
      return { ...state, actor4: action.payload };
    case UPDATE_ACTOR_5:
      return { ...state, actor5: action.payload };
    case UPDATE_COUNTRY_1:
      return { ...state, country1: action.payload };
    case UPDATE_COUNTRY_2:
      return { ...state, country2: action.payload };
    case UPDATE_COUNTRY_3:
      return { ...state, country3: action.payload };
    case UPDATE_REALISATOR_1:
      return { ...state, realisator1: action.payload };
    case UPDATE_REALISATOR_2:
      return { ...state, realisator2: action.payload };
    case UPDATE_GENRE_1:
      return { ...state, genre1: action.payload };
    case UPDATE_GENRE_2:
      return { ...state, genre2: action.payload };
    case UPDATE_GENRE_3:
      return { ...state, genre3: action.payload };

    default:
      return state;
  }
}
