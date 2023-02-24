import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  updateTitle, updateSynopsis, updateReleaseDate,
  updateProductionStudio1, updateProductionStudio2,
  updateActor1, updateActor2, updateActor3, updateActor4, updateActor5,
  updateCountry1, updateCountry2, updateCountry3,
  updateRealisator1, updateRealisator2,
  updateGenre1, updateGenre2, updateGenre3,
} from '../../actions/formActions';

import './styles.scss';

function AddMovies() {
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [productionStudio1, setProductionStudio1] = useState('');
  const [productionStudio2, setProductionStudio2] = useState('');
  const [actor1, setActor1] = useState('');
  const [actor2, setActor2] = useState('');
  const [actor3, setActor3] = useState('');
  const [actor4, setActor4] = useState('');
  const [actor5, setActor5] = useState('');
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [country3, setCountry3] = useState('');
  const [realisator1, setRealisator1] = useState('');
  const [realisator2, setRealisator2] = useState('');
  const [genre1, setGenre1] = useState('');
  const [genre2, setGenre2] = useState('');
  const [genre3, setGenre3] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTitle(title));
    dispatch(updateSynopsis(synopsis));
    dispatch(updateReleaseDate(releaseDate));
    dispatch(updateProductionStudio1(productionStudio1));
    dispatch(updateProductionStudio2(productionStudio2));
    dispatch(updateActor1(actor1));
    dispatch(updateActor2(actor2));
    dispatch(updateActor3(actor3));
    dispatch(updateActor4(actor4));
    dispatch(updateActor5(actor5));
    dispatch(updateCountry1(country1));
    dispatch(updateCountry2(country2));
    dispatch(updateCountry3(country3));
    dispatch(updateRealisator1(realisator1));
    dispatch(updateRealisator2(realisator2));
    dispatch(updateGenre1(genre1));
    dispatch(updateGenre2(genre2));
    dispatch(updateGenre3(genre3));
    setTitle('');
    setSynopsis('');
    setReleaseDate('');
    setProductionStudio1('');
    setProductionStudio2('');
    setActor1('');
    setActor2('');
    setActor3('');
    setActor4('');
    setActor5('');
    setCountry1('');
    setCountry2('');
    setCountry3('');
    setRealisator1('');
    setRealisator2('');
    setGenre1('');
    setGenre2('');
    setGenre3('');
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
                type="text"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="AddMovies--synopsis">
              <input
                className="synopsis_input"
                type="text"
                placeholder="Synopsis"
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
              />
            </div>
            <div className="AddMovies--date">
              <input
                type="text"
                placeholder="Date de sortie"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
              />
            </div>

            {/* Production Studios */}
            <div className="AddMovies--studio sudio-input can-add">
              <input
                type="text"
                placeholder="Studio de production"
                value={productionStudio1}
                onChange={(e) => setProductionStudio1(e.target.value)}
              />
              <i className="sudio bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--studio sudio-input  can-add invisible">
              <input
                type="text"
                placeholder="Studio de production 2"
                value={productionStudio2}
                onChange={(e) => setProductionStudio2(e.target.value)}
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
                onChange={(e) => setActor1(e.target.value)}
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <input
                type="text"
                placeholder="Acteur 2"
                value={actor2}
                onChange={(e) => setActor2(e.target.value)}
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <input
                type="text"
                placeholder="Acteur 3"
                value={actor3}
                onChange={(e) => setActor3(e.target.value)}
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <input
                type="text"
                placeholder="Acteur 4"
                value={actor4}
                onChange={(e) => setActor4(e.target.value)}
              />
              <i className="actor bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--acteur actor-input can-add invisible">
              <input
                type="text"
                placeholder="Acteur 5"
                value={actor5}
                onChange={(e) => setActor5(e.target.value)}
              />
            </div>

            {/* Countries */}
            <div className="AddMovies--country country-input can-add">
              <input
                type="text"
                placeholder="Pays 1"
                value={country1}
                onChange={(e) => setCountry1(e.target.value)}
              />
              <i className="country bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--country country-input can-add invisible">
              <input
                type="text"
                placeholder="Pays 2"
                value={country2}
                onChange={(e) => setCountry2(e.target.value)}
              />
              <i className="country bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--country country-input can-add invisible">
              <input
                type="text"
                placeholder="Pays 3"
                value={country3}
                onChange={(e) => setCountry3(e.target.value)}
              />
            </div>

            {/* Directors */}
            <div className="AddMovies--realisateur director-input can-add">
              <input
                type="text"
                placeholder="Réalisateur 1"
                value={realisator1}
                onChange={(e) => setRealisator1(e.target.value)}
              />
              <i className="director bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--realisateur director-input can-add invisible">
              <input
                type="text"
                placeholder="Réalisateur 2"
                value={realisator2}
                onChange={(e) => setRealisator2(e.target.value)}
              />
            </div>

            {/* Genres */}
            <div className="AddMovies--genre genre-input can-add">
              <input
                type="text"
                placeholder="Genre 1"
                value={genre1}
                onChange={(e) => setGenre1(e.target.value)}
              />
              <i className="genre bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--genre genre-input can-add invisible">
              <input
                type="text"
                placeholder="Genre 2"
                value={genre2}
                onChange={(e) => setGenre2(e.target.value)}
              />
              <i className="genre bi bi-plus-circle" onClick={handleClickAdd} />
            </div>
            <div className="AddMovies--genre genre-input can-add invisible">
              <input
                type="text"
                placeholder="Genre 3"
                value={genre3}
                onChange={(e) => setGenre3(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="button_module">
          <button type="submit">Valider</button>
          <button type="submit">Annuler</button>
        </div>
      </form>
    </div>
  );
}

export default AddMovies;
