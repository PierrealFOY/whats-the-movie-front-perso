export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_SYNOPSIS = 'UPDATE_SYNOPSIS';
export const UPDATE_RELEASE_DATE = 'UPDATE_RELEASE_DATE';
export const UPDATE_PRODUCTION_STUDIOS = 'UPDATE_PRODUCTION_STUDIOS';
export const UPDATE_ACTORS = 'UPDATE_ACTORS';
export const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';
export const UPDATE_DIRECTORS = 'UPDATE_DIRECTORS';
export const UPDATE_GENRES = 'UPDATE_GENRES';

// Getting list of directors, studios, actors, etc...
export const GET_LISTS_FOR_MOVIE = 'GET_LISTS_FOR_MOVIE';
export const SET_LISTS_FOR_MOVIE = 'SET_LISTS_FOR_MOVIE';
export const RESET_MOVIES_INFOS = 'RESET_MOVIES_INFOS';

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  payload: title,
});

export const updateSynopsis = (synopsis) => ({
  type: UPDATE_SYNOPSIS,
  payload: synopsis,
});

export const updateReleaseDate = (releaseDate) => ({
  type: UPDATE_RELEASE_DATE,
  payload: releaseDate,
});

export const updateProductionStudios = (productionStudio) => ({
  type: UPDATE_PRODUCTION_STUDIOS,
  payload: productionStudio,
});

export const updateActors = (actor) => ({
  type: UPDATE_ACTORS,
  payload: actor,
});

export const updateCountries = (country) => ({
  type: UPDATE_COUNTRIES,
  payload: country,
});

export const updateDirectors = (director) => ({
  type: UPDATE_DIRECTORS,
  payload: director,
});

export const updateGenres = (genre) => ({
  type: UPDATE_GENRES,
  payload: genre,
});

export const getListsForMovie = () => ({
  type: GET_LISTS_FOR_MOVIE,
});

export const setListsForMovie = (actors, countries, directors, genres, productionStudios) => ({
  type: SET_LISTS_FOR_MOVIE,
  actors: actors,
  countries: countries,
  directors: directors,
  genres: genres,
  productionStudios: productionStudios,
});

export const resetFilmsInfos = () => ({
  type: RESET_MOVIES_INFOS,
});
