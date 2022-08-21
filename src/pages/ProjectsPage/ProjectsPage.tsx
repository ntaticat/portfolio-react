import React from 'react'
import { ContentContainer } from '../../components/ContentContainer/ContentContainer'
import { ProjectsContent } from '../../components/ProjectsContent/ProjectsContent'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'

export const ProjectsPage = () => {
  return (
    <>
      <PageLayout>
        <ContentContainer>
          <ProjectsContent />
        </ContentContainer>
      </PageLayout>
    </>
  )
}
