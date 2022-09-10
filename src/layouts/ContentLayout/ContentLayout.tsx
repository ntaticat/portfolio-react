import React, { ReactElement } from 'react'
import styles from './ContentLayout.module.css'

interface IContentLayout {
  children: ReactElement;
  imageUrl: string;
  title: string;
}

export const ContentLayout = ({ children, imageUrl, title }: IContentLayout) => {
  return (
    <section className={styles.container}>
      <article>
        <div className={styles.content}>
          {/*  */}
          <div className={styles.headerContainer}>
            <div className={styles.imgContainer}>
              <img src={imageUrl} alt={`${title} image header first`} />
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.title}>{ title }</p>
            </div>
          </div>
          {/*  */}
          <div className={styles.bodyContainer}>
            { children }
          </div>
        </div>
      </article>
    </section>
  )
}
