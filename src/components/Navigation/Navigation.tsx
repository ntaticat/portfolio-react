import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}><Link to='/'>Inicio</Link></li>
        <li className={styles.navListItem}><Link to='/about'>Acerca de mí</Link></li>
        <li className={styles.navListItem}><Link to='/projects'>Proyectos</Link></li>
        <li className={styles.navListItem}><Link to='/contact'>Contacto</Link></li>
      </ul>
    </nav>
  )
}
