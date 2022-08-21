import React, { Children, ReactElement } from 'react'
import { Header } from '../../components/Header/Header'
import { ContentContainer } from '../../components/ContentContainer/ContentContainer'
import { Navigation } from '../../components/Navigation/Navigation'
import styles from './PageLayout.module.css'
import { NavigationContainer } from '../../components/NavigationContainer/NavigationContainer'

export interface IPageLayout {
  children: ReactElement | ReactElement[];
};

export const PageLayout = (props: IPageLayout) => {
  return (
    <>
      <Header />
      <NavigationContainer />
      { props.children }
    </>
  )
}
