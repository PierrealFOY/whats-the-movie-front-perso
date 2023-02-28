import { useDispatch, useSelector } from 'react-redux';

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
  const productionStudio1 = useSelector((state) => state.addMovie.productionStudio1);
  const productionStudio2 = useSelector((state) => state.addMovie.productionStudio2);
  const actor1 = useSelector((state) => state.addMovie.actor1);
  const actor2 = useSelector((state) => state.addMovie.actor2);
  const actor3 = useSelector((state) => state.addMovie.actor3);
  const actor4 = useSelector((state) => state.addMovie.actor4);
  const actor5 = useSelector((state) => state.addMovie.actor5);
  const director1 = useSelector((state) => state.addMovie.realisator1);
  const director2 = useSelector((state) => state.addMovie.realisator2);
  const country1 = useSelector((state) => state.addMovie.country1);
  const country2 = useSelector((state) => state.addMovie.country2);
  const country3 = useSelector((state) => state.addMovie.country3);
  const genre1 = useSelector((state) => state.addMovie.genre1);
  const genre2 = useSelector((state) => state.addMovie.genre2);
  const genre3 = useSelector((state) => state.addMovie.genre3);

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
    dispatch(updateProductionStudio1(e.target.value));
  };

  const handleChangeProductionStudio2 = (e) => {
    dispatch(updateProductionStudio2(e.target.value));
  };

  const handleChangeActor1 = (e) => {
    dispatch(updateActor1(e.target.value));
  };

  const handleChangeActor2 = (e) => {
    dispatch(updateActor2(e.target.value));
  };

  const handleChangeActor3 = (e) => {
    dispatch(updateActor3(e.target.value));
  };

  const handleChangeActor4 = (e) => {
    dispatch(updateActor4(e.target.value));
  };

  const handleChangeActor5 = (e) => {
    dispatch(updateActor5(e.target.value));
  };

  const handleChangeCountry1 = (e) => {
    dispatch(updateCountry1(e.target.value));
  };

  const handleChangeCountry2 = (e) => {
    dispatch(updateCountry2(e.target.value));
  };

  const handleChangeCountry3 = (e) => {
    dispatch(updateCountry3(e.target.value));
  };

  const handleChangeDirector1 = (e) => {
    dispatch(updateRealisator1(e.target.value));
  };

  const handleChangeDirector2 = (e) => {
    dispatch(updateRealisator2(e.target.value));
  };

  const handleChangeGenre1 = (e) => {
    dispatch(updateGenre1(e.target.value));
  };

  const handleChangeGenre2 = (e) => {
    dispatch(updateGenre2(e.target.value));
  };

  const handleChangeGenre3 = (e) => {
    dispatch(updateGenre3(e.target.value));
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
              <input
                type="text"
                placeholder="Studio de production"
                value={productionStudio1}
                onChange={handleChangeProductionStudio1}
              />
              <i className="sudio bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--studio sudio-input  can-add invisible">
              <input
                type="text"
                placeholder="Studio de production 2"
                value={productionStudio2}
                onChange={handleChangeProductionStudio2}
              />
            </div>
          </div>

          {/* Actors */}
          <div className="right">
            <div className="AddMovies--acteur actor-input can-add">
              <input
                type="text"
                placeholder="Acteur 1"
                value={actor1}
                onChange={handleChangeActor1}
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <input
                type="text"
                placeholder="Acteur 2"
                value={actor2}
                onChange={handleChangeActor2}
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <input
                type="text"
                placeholder="Acteur 3"
                value={actor3}
                onChange={handleChangeActor3}
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <input
                type="text"
                placeholder="Acteur 4"
                value={actor4}
                onChange={handleChangeActor4}
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <input
                type="text"
                placeholder="Acteur 5"
                value={actor5}
                onChange={handleChangeActor5}
              />
            </div>

            {/* Countries */}
            <div className="AddMovies--country country-input can-add">
              <input
                type="text"
                placeholder="Pays 1"
                value={country1}
                onChange={handleChangeCountry1}
              />
              <i className="country bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--country country-input can-add invisible">
              <input
                type="text"
                placeholder="Pays 2"
                value={country2}
                onChange={handleChangeCountry2}
              />
              <i className="country bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--country country-input can-add invisible">
              <input
                type="text"
                placeholder="Pays 3"
                value={country3}
                onChange={handleChangeCountry3}
              />
            </div>

            {/* Directors */}
            <div className="AddMovies--realisateur director-input can-add">
              <input
                type="text"
                placeholder="Réalisateur 1"
                value={director1}
                onChange={handleChangeDirector1}
              />
              <i className="director bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--realisateur director-input can-add invisible">
              <input
                type="text"
                placeholder="Réalisateur 2"
                value={director2}
                onChange={handleChangeDirector2}
              />
            </div>

            {/* Genres */}
            <div className="AddMovies--genre genre-input can-add">
              <input
                type="text"
                placeholder="Genre 1"
                value={genre1}
                onChange={handleChangeGenre1}
              />
              <i className="genre bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--genre genre-input can-add invisible">
              <input
                type="text"
                placeholder="Genre 2"
                value={genre2}
                onChange={handleChangeGenre2}
              />
              <i className="genre bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--genre genre-input can-add invisible">
              <input
                type="text"
                placeholder="Genre 3"
                value={genre3}
                onChange={handleChangeGenre3}
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
