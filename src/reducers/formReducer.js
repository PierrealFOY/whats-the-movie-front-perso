const initialState = {
  title: '',
  synopsis: '',
  releaseDate: '',
  productionStudio: '',
};

export default function formReducer(action, state = initialState) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return { ...state, title: action.payload };
    case 'UPDATE_SYNOPSIS':
      return { ...state, synopsis: action.payload };
    case 'UPDATE_RELEASE_DATE':
      return { ...state, releaseDate: action.payload };
    case 'UPDATE_PRODUCTION_STUDIO':
      return { ...state, productionStudio: action.payload };
    case 'UPDATE_ACTOR_ONE':
      return { ...state, actorOne: action.payload };
    case 'UPDATE_ACTOR_SECOND':
      return { ...state, actorSecond: action.payload };
    case 'UPDATE_COUNTRY_FIRST':
      return { ...state, countryFirst: action.payload };
    case 'UPDATE_COUNTRY_SECOND':
      return { ...state, countrySecond: action.payload };
    case 'UPDATE_REALISATOR_FIRST':
      return { ...state, realisatorFirst: action.payload };
    case 'UPDATE_REALISATOR_SECOND':
      return { ...state, realisatorSecond: action.payload };
    case 'UPDATE_GENRE_FIRST':
      return { ...state, genreFirst: action.payload };
    case 'UPDATE_GENRE_SECOND':
      return { ...state, genreSecond: action.payload };

    default:
      return state;
  }
}
