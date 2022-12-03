import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.name}>Rafael Estrada</h1>
        <h2 className={styles.username}>@ntaticat</h2>
      </div>
    </header>
  )
}
