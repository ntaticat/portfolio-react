import React from 'react'
import { IProject } from '../../types/app.interfaces';
import styles from './ProjectItem.module.css'

interface IProjectItem {
  repo: IProject;
}

export const ProjectItem = ({ repo }: IProjectItem) => {

  return (
    <div className="">
      <div className={styles.projectContainer}>
        {/* Data */}
        <div className={styles.projectDataContainer}>
          <div className={styles.projectDataInfo}>
            <div className={styles.projectInfoContainer}>
              <p className={styles.projectTitle}>{repo.name}</p>
              <p className={styles.projectDescription}>{repo.description}</p>
            </div>
            <div className={styles.projectLinks}>
              {repo.project_links.map((projectLink, projectLinkIndex) => (
                <a key={projectLinkIndex} target={'_blank'} href={projectLink.link_url}>{projectLink.link_title}</a>
              ))}
            </div>
          </div>
          <button className={styles.projectImgButton}>
            <img className={styles.projectDataImg} src={ repo.img_links[0] } alt="projectImage" />
          </button>
        </div>
      </div>
    </div>
  );
}
