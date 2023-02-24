const initialState = {
  title: '',
  synopsis: '',
  releaseDate: '',
  productionStudio1: '',
  productionStudio2: '',
  actor1: '',
  actor2: '',
  actor3: '',
  actor4: '',
  actor5: '',
  country1: '',
  country2: '',
  country3: '',
  realisator1: '',
  realisator2: '',
  genre1: '',
  genre2: '',
  genre3: '',
};

export default function formReducer(action, state = initialState) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return { ...state, title: action.payload };
    case 'UPDATE_SYNOPSIS':
      return { ...state, synopsis: action.payload };
    case 'UPDATE_RELEASE_DATE':
      return { ...state, releaseDate: action.payload };
    case 'UPDATE_PRODUCTION_STUDIO_1':
      return { ...state, productionStudio1: action.payload };
    case 'UPDATE_PRODUCTION_STUDIO_2':
      return { ...state, productionStudio2: action.payload };
    case 'UPDATE_ACTOR_1':
      return { ...state, actor1: action.payload };
    case 'UPDATE_ACTOR_2':
      return { ...state, actor2: action.payload };
    case 'UPDATE_ACTOR_3':
      return { ...state, actor3: action.payload };
    case 'UPDATE_ACTOR_4':
      return { ...state, actor4: action.payload };
    case 'UPDATE_ACTOR_5':
      return { ...state, actor5: action.payload };
    case 'UPDATE_COUNTRY_1':
      return { ...state, country1: action.payload };
    case 'UPDATE_COUNTRY_2':
      return { ...state, country2: action.payload };
    case 'UPDATE_COUNTRY_3':
      return { ...state, country3: action.payload };
    case 'UPDATE_REALISATOR_1':
      return { ...state, realisator1: action.payload };
    case 'UPDATE_REALISATOR_2':
      return { ...state, realisator2: action.payload };
    case 'UPDATE_GENRE_1':
      return { ...state, genre1: action.payload };
    case 'UPDATE_GENRE_2':
      return { ...state, genre2: action.payload };
    case 'UPDATE_GENRE_3':
      return { ...state, genre3: action.payload };

    default:
      return state;
  }
}
