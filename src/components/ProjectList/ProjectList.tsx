import React, { useEffect, useState } from 'react'
import { getRepos, IRepo } from '../../services/repos.services';
import { ProjectItem } from '../ProjectItem/ProjectItem';

export const ProjectList = () => {

  const [repos, setRepos] = useState([] as IRepo[]);

  useEffect(() => {
    const func = async () => {
      const repos = await getRepos();
      console.log(repos);
      setRepos([
        ...repos
      ]);
    }

    func();
  }, []);

  return (
    <>
      {repos.map((repo) => (
        <ProjectItem key={repo.id} repo={repo} />
      ))}
    </>
  )
}
