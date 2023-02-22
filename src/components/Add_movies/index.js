import './styles.scss';

function AddMovies() {
  return (
    <div className="AddMovies">
      <div className="add_new">

        <div className="left">

          <div className="AddMovies--title"> <input type="text" placeholder="Titre" /> </div>
          <div className="AddMovies--synopsis"><input className="synopsis_input" type="text" placeholder="Synopsis" /></div>
          <div className="AddMovies--date"><input type="text" placeholder="Date de sortie" /></div>
          <div className="AddMovies--studio"><input type="text" placeholder="Studio de production" /></div>
          <div className="AddMovies--studio"><input type="text" placeholder="Studio de production" /></div>

        </div>

        <div className="right">

          <div className="AddMovies--acteur_first"><input type="text" placeholder="Acteur 1" /></div>
          <div className="AddMovies--acteur_second"><input type="text" placeholder="Acteur 2" /></div>
          <div className="AddMovies--country_1"><input type="text" placeholder="Pays 1" /></div>
          <div className="AddMovies--country_2"><input type="text" placeholder="Pays 2" /></div>
          <div className="AddMovies--realisateur_1"><input type="text" placeholder="Réalisateur 1" /></div>
          <div className="AddMovies--realisateur_2"><input type="text" placeholder="Réalisateur 2" /></div>
          <div className="AddMovies--genre_1"><input type="text" placeholder="Genre 1" /></div>
          <div className="AddMovies--genre_2"><input type="text" placeholder="Genre 2" /></div>
        </div>
      </div>
      <div className="button_module">
        <button type="submit">Valider</button>
        <button type="submit">Annuler</button>

      </div>

    </div>
  );
}

export default AddMovies;
