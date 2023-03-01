
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  updateTitle, updateSynopsis, updateReleaseDate,
  updateProductionStudio1, updateProductionStudio2,
  updateActor1, updateActor2, updateActor3, updateActor4, updateActor5,
  updateCountry1, updateCountry2, updateCountry3,
  updateRealisator1, updateRealisator2,
  updateGenre1, updateGenre2, updateGenre3,
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

  const handleChangeProductionStudio1 = (e) => {
    dispatch(updateProductionStudio1(e.value));
  };

  const handleChangeProductionStudio2 = (e) => {
    dispatch(updateProductionStudio2(e.value));
  };

  const handleChangeActor1 = (e) => {
    dispatch(updateActor1(e.value));
  };

  const handleChangeActor2 = (e) => {
    dispatch(updateActor2(e.value));
  };

  const handleChangeActor3 = (e) => {
    dispatch(updateActor3(e.value));
  };

  const handleChangeActor4 = (e) => {
    dispatch(updateActor4(e.value));
  };

  const handleChangeActor5 = (e) => {
    dispatch(updateActor5(e.value));
  };

  const handleChangeCountry1 = (e) => {
    dispatch(updateCountry1(e.value));
  };

  const handleChangeCountry2 = (e) => {
    dispatch(updateCountry2(e.value));
  };

  const handleChangeCountry3 = (e) => {
    dispatch(updateCountry3(e.value));
  };

  const handleChangeDirector1 = (e) => {
    dispatch(updateRealisator1(e.value));
  };

  const handleChangeDirector2 = (e) => {
    dispatch(updateRealisator2(e.value));
  };

  const handleChangeGenre1 = (e) => {
    dispatch(updateGenre1(e.value));
  };

  const handleChangeGenre2 = (e) => {
    dispatch(updateGenre2(e.value));
  };

  const handleChangeGenre3 = (e) => {
    dispatch(updateGenre3(e.value));
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
  };

  return (
    <div className="AddMovies">
      <form onSubmit={handleSubmit}>
        <div className="add_new">
          <div className="left">
            <div className="AddMovies--title">
              <input
                id="title"
                type="text"
                placeholder="Titre"
                value={title}
                onChange={handleChangeTitle}
              />
            </div>
            <div className="AddMovies--synopsis">
              <input
                className="synopsis_input"
                type="text"
                placeholder="Synopsis"
                value={synopsis}
                onChange={handleChangeSynopsis}
              />
            </div>
            <div className="AddMovies--date">
              <input
                type="date"
                placeholder="Date de sortie"
                value={releaseDate}
                onChange={handleChangeReleaseDate}
              />
            </div>

            {/* Production Studios */}
            <div className="AddMovies--studio sudio-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeProductionStudio1}
                options={studiosList}
                placeholder="Studio de production 1"
              />
              <i className="sudio bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--studio sudio-input  can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeProductionStudio2}
                options={studiosList}
                placeholder="Studio de production 2"
              />
            </div>
          </div>

          {/* Actors */}
          <div className="right">
            <div className="AddMovies--acteur actor-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeActor1}
                options={actorsList}
                placeholder="Acteur 1"
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeActor2}
                options={actorsList}
                placeholder="Acteur 2"
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeActor3}
                options={actorsList}
                placeholder="Acteur 3"
              />              
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeActor4}
                options={actorsList}
                placeholder="Acteur 4"
              />            
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeActor5}
                options={actorsList}
                placeholder="Acteur 5"
              />              
            </div>

            {/* Countries */}
            <div className="AddMovies--country country-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeCountry1}
                options={countriesList}
                placeholder="Pays 1"
              />               
              <i className="country bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--country country-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeCountry2}
                options={countriesList}
                placeholder="Pays 2"
              />                  
              <i className="country bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--country country-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeCountry3}
                options={countriesList}
                placeholder="Pays 3"
              />                  
            </div>

            {/* Directors */}
            <div className="AddMovies--realisateur director-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeDirector1}
                options={directorsList}
                placeholder="Réalisateur 1"
              />               
              <i className="director bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--realisateur director-input can-add invisible">
              <Select
                className="select-combobox"
                onChange={handleChangeDirector2}
                options={directorsList}
                placeholder="Réalisateur 2"
              />                  
            </div>

            {/* Genres */}
            <div className="AddMovies--genre genre-input can-add">
              <Select
                className="select-combobox"
                onChange={handleChangeGenre1}
                options={genresList}
                placeholder="Genre 1"
              />                
              <i className="genre bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--genre genre-input can-add invisible">
            <Select
                className="select-combobox"
                onChange={handleChangeGenre2}
                options={genresList}
                placeholder="Genre 2"
              />  
              <i className="genre bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--genre genre-input can-add invisible">
            <Select
                className="select-combobox"
                onChange={handleChangeGenre3}
                options={genresList}
                placeholder="Genre 3"
              />  
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
