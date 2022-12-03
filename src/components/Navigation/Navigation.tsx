import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css';

export const Navigation = () => {

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setActiveMenu(!activeMenu)} className={styles.activeMenu}>Menu</button>
      <div className={styles.navContainer}>
        {/*  && "window.innerWidth > 576? 'block': 'none'" */}
        <nav style={{ display: activeMenu || window.innerWidth > 576 ? 'inline-block' : 'none' }} className={styles.navListContainer}>
          <ul className={styles.navList}>
            <Link className={styles.navListLink} to='/'><li className={styles.navListItem}>Inicio</li></Link>
            <Link className={styles.navListLink} to='/about'><li className={styles.navListItem}>Acerca de mí</li></Link>
            <Link className={styles.navListLink} to='/projects'><li className={styles.navListItem}>Proyectos</li></Link>
            <Link className={styles.navListLink} to='/contact'><li className={styles.navListItem}>Contacto</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}
