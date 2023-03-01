import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  updateTitle, updateSynopsis, updateReleaseDate,
  updateProductionStudios,
  updateActors,
  updateCountries,
  updateDirectors,
  updateGenres,
} from '../../actions/formActions';
import { submitMovie } from '../../actions/movies';

import './styles.scss';

function AddMovies() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.addMovie.title);
  const synopsis = useSelector((state) => state.addMovie.synopsis);
  const releaseDate = useSelector((state) => state.addMovie.releaseDate);

  // lists
  const actorsList = useSelector((state) => state.addMovie.actorsList);
  const studiosList = useSelector((state) => state.addMovie.studiosList);
  const countriesList = useSelector((state) => state.addMovie.countriesList);
  const directorsList = useSelector((state) => state.addMovie.directorsList);
  const genresList = useSelector((state) => state.addMovie.genresList);

  const handleChangeTitle = (e) => {
    dispatch(updateTitle(e.target.value));
  };

  const handleChangeSynopsis = (e) => {
    dispatch(updateSynopsis(e.target.value));
  };

  const handleChangeReleaseDate = (e) => {
    dispatch(updateReleaseDate(e.target.value));
  };

  const handleChangeProductionStudios = (e) => {
    dispatch(updateProductionStudios(e.value));
  };

  const handleChangeActors = (e) => {
    dispatch(updateActors(e.value));
  };

  const handleChangeCountries = (e) => {
    dispatch(updateCountries(e.value));
  };

  const handleChangeDirectors = (e) => {
    dispatch(updateDirectors(e.value));
  };

  const handleChangeGenres = (e) => {
    dispatch(updateGenres(e.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitMovie());
  };

  const handleClickAdd = (evt) => {
    // first class of the icon
    const classElement = evt.target.classList[0];
    // we get the elements with the class : .firstClass-input .invisible
    const element = document.querySelector(`.${classElement}-input.invisible`);
    // we remove the class invisible on the element for reveal it
    element.classList.remove('invisible');
    // we put the class invisible on the icon for hide it
    evt.target.classList.add('invisible');

    const parentDiv = evt.target.closest('.can-add');
    if (parentDiv !== undefined) {
      parentDiv.style.left = "0px";
    }
  };

  return (
    <div className="AddMovies">      
      <form className="AddMovies-form" onSubmit={handleSubmit}>
      <h1 className="AddMovies-titre">Ajouter un film</h1>
        <div className="add_new">
          <div className="left">
            <div className="AddMovies--title">
              <input
                className="input-movie"
                id="title"
                type="text"
                placeholder="Titre"
                value={title}
                onChange={handleChangeTitle}
                required
              />
            </div>
            <div className="AddMovies--synopsis">
              <textarea
                className="synopsis_input input-movie"
                value={synopsis}
                placeholder="Synopsis"
                onChange={handleChangeSynopsis}
                minLength={50}
                required
              />
            </div>
            <div className="AddMovies--date">
              <input
                className="input-movie"
                type="date"
                placeholder="Date de sortie"
                value={releaseDate}
                onChange={handleChangeReleaseDate}
                required
              />
            </div>

            {/* Production Studios */}
            <div className="AddMovies--studio studio-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeProductionStudios}
                options={studiosList}
                placeholder="Studio de production 1"
              />
              <div className="can-add-icon"><i className="studio bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--studio studio-input can-add invisible last-select">
              <Select
                className="select-combobox"
                onChange={handleChangeProductionStudios}
                options={studiosList}
                placeholder="Studio de production 2"
              />
              <div className="can-add-icon"><i className="bi bi-plus-circle invisible" /></div>
            </div>
          </div>

          {/* Actors */}
          <div className="right">
            <div className="AddMovies--acteur actor-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeActors}
                options={actorsList}
                placeholder="Acteur 1"
              />
              <div className="can-add-icon"><i className="actor bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeActors}
                options={actorsList}
                placeholder="Acteur 2"
              />
              <div className="can-add-icon"><i className="actor bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeActors}
                options={actorsList}
                placeholder="Acteur 3"
              />              
              <div className="can-add-icon"><i className="actor bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeActors}
                options={actorsList}
                placeholder="Acteur 4"
              />            
              <div className="can-add-icon"><i className="actor bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible last-select">
              <Select
                className="select-combobox"
                onChange={handleChangeActors}
                options={actorsList}
                placeholder="Acteur 5"
              />    
              <div className="can-add-icon"><i className="bi bi-plus-circle invisible" /></div>          
            </div>

            {/* Countries */}
            <div className="AddMovies--country country-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeCountries}
                options={countriesList}
                placeholder="Pays 1"
              />               
              <div className="can-add-icon"><i className="country bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--country country-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeCountries}
                options={countriesList}
                placeholder="Pays 2"
              />                  
              <div className="can-add-icon"><i className="country bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--country country-input can-add invisible last-select">
              <Select
                className="select-combobox"
                onChange={handleChangeCountries}
                options={countriesList}
                placeholder="Pays 3"
              />      
              <div className="can-add-icon"><i className="bi bi-plus-circle invisible" /></div>            
            </div>

            {/* Directors */}
            <div className="AddMovies--realisateur director-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeDirectors}
                options={directorsList}
                placeholder="Réalisateur 1"
              />               
              <div className="can-add-icon"><i className="director bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--realisateur director-input can-add invisible last-select">
              <Select
                className="select-combobox"
                onChange={handleChangeDirectors}
                options={directorsList}
                placeholder="Réalisateur 2"
              />   
              <div className="can-add-icon"><i className="bi bi-plus-circle invisible" /></div>               
            </div>

            {/* Genres */}
            <div className="AddMovies--genre genre-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeGenres}
                options={genresList}
                placeholder="Genre 1"
              />                
              <div className="can-add-icon"><i className="genre bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--genre genre-input can-add invisible">
            <Select
                className="select-combobox"
                onChange={handleChangeGenres}
                options={genresList}
                placeholder="Genre 2"
              />  
              <div className="can-add-icon"><i className="genre bi bi-plus-circle" onClick={handleClickAdd} /></div>
            </div>
            <div className="AddMovies--genre genre-input can-add invisible last-select">
            <Select
                className="select-combobox"
                onChange={handleChangeGenres}
                options={genresList}
                placeholder="Genre 3"
              />  
              <div className="can-add-icon"><i className="bi bi-plus-circle invisible" /></div>
            </div>
          </div>
        </div>

        <div className="button_module">
          <button type="submit">Valider</button>
          <button type="button">Annuler</button>
        </div>
      </form>
    </div>
  );
}

export default AddMovies;
