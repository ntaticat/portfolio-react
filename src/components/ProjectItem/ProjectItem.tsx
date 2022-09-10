import React from 'react'
import { IProject } from '../../types/app.interfaces';
import styles from './ProjectItem.module.css'

interface IProjectItem {
  key: string | number;
  repo: IProject;
}

const projectNames: RegExp[] = [/conejito-commerce/, /conejito-commerce-api/, /creanovel-angular/, /creanovel-dotnet/, /docthesolve-vue/];

export const ProjectItem = ({ key, repo }: IProjectItem) => {



  return (
    <div className="">
      <div className={styles.projectContainer}>
        {/* Data */}
        <div className={styles.projectDataContainer}>
          <div className={styles.projectDataInfo}>
            <div className="">
              <p className={styles.projectTitle}>{repo.name}</p>
              <p className={styles.projectDescription}>{repo.description}</p>
            </div>
            <div className={styles.projectLinks}>
              {repo.project_links.map((projectLink) => (
                <a target={'_blank'} href={projectLink.link_url}>{projectLink.link_title}</a>
              ))}
            </div>
          </div>
          <img className={styles.projectDataImg} src={ repo.img_links[0] } alt="projectImage" />
        </div>
      </div>
    </div>
  );
}
