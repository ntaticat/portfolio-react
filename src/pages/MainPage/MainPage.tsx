import React from 'react'
import { Header } from '../../components/Header/Header';
import { MainContent } from '../../components/MainContent/MainContent';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer';
import { Navigation } from '../../components/Navigation/Navigation';
import { PageLayout } from '../../layouts/PageLayout/PageLayout';
import styles from './MainPage.css';

export const MainPage = () => {
  return (
    <>
      <PageLayout>
        <ContentContainer>
          <MainContent />
        </ContentContainer>
      </PageLayout>
    </>
  )
}
