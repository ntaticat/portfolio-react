import React from 'react'
import { AboutContent } from '../../components/AboutContent/AboutContent'
import { ContentContainer } from '../../components/ContentContainer/ContentContainer'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'

export const AboutPage = () => {
  return (
    <>
      <PageLayout>
        <ContentContainer>
          <AboutContent />
        </ContentContainer>
      </PageLayout>
    </>
  )
}
