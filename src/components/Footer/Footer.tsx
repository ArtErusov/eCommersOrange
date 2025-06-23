import { FC, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import Modal from '../ui/Modal/Modal';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

const Footer: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setIsModalOpen(params.get('modal') === 'project-info');
  }, [location.search]);

  const handleInfoClick = () => {
    const params = new URLSearchParams(location.search);
    params.set('modal', 'project-info');
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handleModalClose = () => {
    const params = new URLSearchParams(location.search);
    params.delete('modal');
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return (
    <>
      <div className={styles['footer__division']}></div>
      <footer className={styles['footer']}>
        <div className={styles['footer__navigation']}>
          <h4>Навигация</h4>
          <div className={styles['footer__links']}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/auth/reg'}>Регистрация</Link>
            <Link to={'/catalog'}>Каталог</Link>
            <Link to={'/auth/login'}>Авторизация</Link>
            <Link to={'/?modal=project-info'}>Технологии</Link>
            <Link to={'/auth/profile'}>Профиль</Link>
            <Link to={'/product/125476'}>Продукт</Link>
            <Link to={'/offer'}>Оферта</Link>
          </div>
        </div>
        <div className={styles['footer__info']}>
          <button onClick={handleInfoClick}>Информация о проекте</button>
          <a href="/">Git Репозиторий</a>
        </div>
      </footer>
      <div className={styles['footer__developer']}>
        <p>Artem Erusov 2025</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ProjectInfo />
      </Modal>
    </>
  );
};

export default Footer;
