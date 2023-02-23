import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  updateTitle, updateSynopsis, updateReleaseDate, updateProductionStudio,
  updateActor1, updateActor2, updateCountry1, updateCountry2, updateRealisator1,
  updateRealisator2, updateGenre1, updateGenre2,
} from '../../actions/formActions';

import './styles.scss';

function AddMovies() {
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [productionStudio, setProductionStudio] = useState('');
  const [actorOne, setActorOne] = useState('');
  const [actorSecond, setActorSecond] = useState('');
  const [countryFirst, setCountryFirst] = useState('');
  const [countrySecond, setCountrySecond] = useState('');
  const [realisatorFirst, setRealisatorFirst] = useState('');
  const [realisatorSecond, setRealisatorSecond] = useState('');
  const [genreFirst, setGenreFirst] = useState('');
  const [genreSecond, setGenreSecond] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTitle(title));
    dispatch(updateSynopsis(synopsis));
    dispatch(updateReleaseDate(releaseDate));
    dispatch(updateProductionStudio(productionStudio));
    dispatch(updateActor1(actorOne));
    dispatch(updateActor2(actorSecond));
    dispatch(updateCountry1(countryFirst));
    dispatch(updateCountry2(countrySecond));
    dispatch(updateRealisator1(realisatorFirst));
    dispatch(updateRealisator2(realisatorSecond));
    dispatch(updateGenre1(genreFirst));
    dispatch(updateGenre2(genreSecond));
    setTitle('');
    setSynopsis('');
    setReleaseDate('');
    setProductionStudio('');
    setActorOne('');
    setActorSecond('');
    setCountryFirst('');
    setCountrySecond('');
    setRealisatorFirst('');
    setRealisatorSecond('');
    setGenreFirst('');
    setGenreSecond('');
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
            <div className="AddMovies--studio">
              <input
                type="text"
                placeholder="Studio de production"
                value={productionStudio}
                onChange={(e) => setProductionStudio(e.target.value)}
              />
            </div>
          </div>

          <div className="right">
            <div className="AddMovies--acteur_first">
              <input
                type="text"
                placeholder="Acteur 1"
                value={actorOne}
                onChange={(e) => setActorOne(e.target.value)}
              />
            </div>
            <div className="AddMovies--acteur_second">
              <input
                type="text"
                placeholder="Acteur 2"
                value={actorSecond}
                onChange={(e) => setActorSecond(e.target.value)}
              />
            </div>
            <div className="AddMovies--country_1">
              <input
                type="text"
                placeholder="Pays 1"
                value={countryFirst}
                onChange={(e) => setCountryFirst(e.target.value)}
              />
            </div>
            <div className="AddMovies--country_2">
              <input
                type="text"
                placeholder="Pays 2"
                value={countrySecond}
                onChange={(e) => setCountrySecond(e.target.value)}
              />
            </div>
            <div className="AddMovies--realisateur_1">
              <input
                type="text"
                placeholder="Réalisateur 1"
                value={realisatorFirst}
                onChange={(e) => setRealisatorFirst(e.target.value)}
              />
            </div>
            <div className="AddMovies--realisateur_2">
              <input
                type="text"
                placeholder="Réalisateur 2"
                value={realisatorSecond}
                onChange={(e) => setRealisatorSecond(e.target.value)}
              />
            </div>
            <div className="AddMovies--genre_1">
              <input
                type="text"
                placeholder="Genre 1"
                value={genreFirst}
                onChange={(e) => setGenreFirst(e.target.value)}
              />
            </div>
            <div className="AddMovies--genre_2">
              <input
                type="text"
                placeholder="Genre 2"
                value={genreSecond}
                onChange={(e) => setGenreSecond(e.target.value)}
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
