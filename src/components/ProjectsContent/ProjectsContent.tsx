import React, { useEffect, useState } from 'react'
import { ContentLayout } from '../../layouts/ContentLayout/ContentLayout';
import { ProjectList } from '../ProjectList/ProjectList';

export const ProjectsContent = () => {
  
  

  return (
    <ContentLayout title='Proyectos' imageUrl='http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/b867d6d7ac0a476.png'>
      <ProjectList />
    </ContentLayout>
  )
}
