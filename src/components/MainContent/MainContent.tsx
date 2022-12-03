import React from 'react'
import { Link } from 'react-router-dom'
import { ContentLayout } from '../../layouts/ContentLayout/ContentLayout'
import { Navigation } from '../Navigation/Navigation'
import { NavigationContainer } from '../NavigationContainer/NavigationContainer'
import styles from './MainContent.module.css'
import gif from '../../assets/chihiro_programming.gif';

export const MainContent = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Título */}
      <div className={styles.mainTitleContainer}>
        <div className="">
          <p className={styles.mainTitle}>Desarrollador de software</p>
        </div>
      </div>

      {/* Acerca de mí */}
      <div className={styles.aboutContainer}>
        <div className="">
          <p className={styles.titles}>Acerca de mí</p>
        </div>
        <div className="">
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, officia.</p>
        </div>
      </div>

      {/* Imagen */}
      <div className={styles.gifContainer}>
        <img className={styles.gif} src={gif} alt="" />
      </div>
    </div>
  )
}
