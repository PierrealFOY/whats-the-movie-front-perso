import React from 'react'
import styles from './styles.scss'
import WTM from '../../assets/WTM.png'

export default function Copyright() {
  return (
    <div className='copyright'>
      <p>Le jeu "What's the movie" a été créé par une équipe de 6 développeurs : JC, PA, Sami, Timothé, Rayane, Oussama.</p>
      <p> Le contenu de ce jeu ainsi que les droits d'auteur sont la propriété de l'équipe de développeurs.</p>
      <p> Toute reproduction, distribution, ou modification de ce jeu sans autorisation écrite de l'équipe de développeurs est interdite et constitue une violation de la loi sur les droits d'auteur.</p>
      <p>Ce jeu est fourni tel quel, sans aucune garantie d'aucune sorte, explicite ou implicite. L'équipe de développeurs ne sera pas responsable des dommages de quelque nature que ce soit découlant de l'utilisation ou de l'impossibilité d'utiliser ce jeu.</p>
      <p>  Le jeu "What's the movie" est destiné à un usage privé uniquement et ne doit pas être utilisé à des fins commerciales ou de promotion.</p>
      <p> En utilisant ce jeu, vous acceptez les termes et conditions énoncés dans ces mentions légales.</p>
      <h1>Amicalement, l'équipe :</h1>
      <img className='copyright--img' src={WTM}></img>
    </div>
  )
}
