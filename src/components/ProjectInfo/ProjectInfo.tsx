import { FC } from 'react';
import styles from './ProjectInfo.module.css';

const ProjectInfo: FC = () => {
  return (
    <div className={styles['project-info']}>
      <h1 className={styles['project-info__title']}>Технологии использованные в проекте</h1>
      <div className={styles['project-info__separator']}></div>
      <p className={styles['project-info__tech']}>Vite</p>
      <p className={styles['project-info__tech']}>React + TypeScript</p>
      <p className={styles['project-info__tech']}>React Router Dom</p>
      <div className={styles['project-info__section']}>
        <p>Отображение сортировки и модальных окон через URL</p>
        <p>Lazy - загрузка страниц</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
