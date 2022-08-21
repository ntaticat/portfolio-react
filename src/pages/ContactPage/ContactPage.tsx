import React from 'react'
import { ContactContent } from '../../components/ContactContent/ContactContent'
import { ContentContainer } from '../../components/ContentContainer/ContentContainer'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'

export const ContactPage = () => {
  return (
    <>
      <PageLayout>
        <ContentContainer>
          <ContactContent />
        </ContentContainer>
      </PageLayout>
    </>
  )
}
