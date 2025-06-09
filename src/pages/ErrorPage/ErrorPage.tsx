import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage: FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      Ошибка 404
      <button className={styles['error-btn']} onClick={() => goBack()}>
        Назад
      </button>
    </>
  );
};
export default ErrorPage;
