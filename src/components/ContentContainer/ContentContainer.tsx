import React, { ReactElement } from 'react'
import styles from './ContentContainer.module.css'

export interface IMainContent {
  children: ReactElement
}

export const ContentContainer = (props: IMainContent) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}
