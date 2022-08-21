import React from 'react'
import { IRepo } from '../../services/repos.services';
import styles from './ProjectItem.module.css'

interface IProjectItem {
  key: string | number;
  repo: IRepo;
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
              <a target={'_blank'} href={repo.html_url}>Repositorio</a>
              <a href="#">Proyecto</a>
            </div>
          </div>
          <img className={styles.projectDataImg} src="https://getsharex.com/img/ShareX_Screenshot.png" alt="projectImage" />
        </div>
      </div>
    </div>
  );
}
