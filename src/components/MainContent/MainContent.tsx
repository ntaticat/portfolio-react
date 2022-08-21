import React from 'react'
import { Link } from 'react-router-dom'
import { ContentLayout } from '../../layouts/ContentLayout/ContentLayout'
import { Navigation } from '../Navigation/Navigation'
import { NavigationContainer } from '../NavigationContainer/NavigationContainer'
import styles from './MainContent.module.css'

export const MainContent = () => {
  return (
    <ContentLayout title='Hola!' imageUrl='https://i.pinimg.com/originals/18/91/cb/1891cbddd14e9084ac8ad51064f6e79f.gif'>
      <p className={styles.bodyDescription}>Esta es mi página web, aqui podrás encontrar los <Link to='/projects'>proyectos</Link> que he realizado, puedes saber más <Link to='/about'>acerca de mí</Link> o puedes <Link to='/contact'>contactarme</Link>.</p>
    </ContentLayout>
  )
}
