import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
      <footer>
        <div className={styles['footer']}>
          <button className={styles['info']} onClick={handleInfoClick}>
            Информация о проекте
          </button>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ProjectInfo />
      </Modal>
    </>
  );
};

export default Footer;
