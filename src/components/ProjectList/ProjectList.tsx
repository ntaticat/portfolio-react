import React, { Fragment, useEffect, useState } from 'react';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import projectsData from '../../data/projects.json';
import { IProject } from '../../types/app.interfaces';
import styles from './Navigation.module.css'

export const ProjectList = () => {

  const [repos, setRepos] = useState([] as IProject[]);

  useEffect(() => {
    setRepos([...projectsData]);
  }, []);

  return (
    <>
      {repos.map((repo, repoIndex) => (
        <ProjectItem key={repoIndex} repo={repo} />
      ))}
    </>
  )
}
