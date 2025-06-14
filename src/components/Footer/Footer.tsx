// import { FC } from 'react';
// import styles from './Footer.module.css';

// const Footer: FC = () => {
//   return (
//     <footer>
//       <div className={styles['footer']}>
//         <button className={styles['info']}>Информация о проекте</button>
//       </div>
//     </footer>
//   );
// };
// export default Footer;

import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Footer.module.css';
import Modal from '../ui/Modal/Modal';

const Footer: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Проверяем URL параметры при монтировании и изменении searchParams
  useEffect(() => {
    const modalParam = searchParams.get('modal');

    if (modalParam === 'project-info') {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [searchParams]);

  const handleInfoClick = () => {
    // Добавляем параметр в URL
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('modal', 'project-info');
    setSearchParams(newSearchParams);
  };

  const handleModalClose = () => {
    // Удаляем параметр из URL
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('modal');
    setSearchParams(newSearchParams);
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

      {/* Модальное окно с информацией о проекте */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div>Информация о проекте</div>
      </Modal>
    </>
  );
};

export default Footer;
