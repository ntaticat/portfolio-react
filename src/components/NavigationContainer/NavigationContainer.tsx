import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import styles from './NavigationContainer.module.css'

export const NavigationContainer = () => {
  return (
    <div className={styles.container}>
      <Navigation />
    </div>
  )
}
