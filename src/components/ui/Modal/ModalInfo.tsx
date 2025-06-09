// Аналогичный компонент как  Modal.tsx только с коментариями

// Импортируем ReactDOM для создания портала
import ReactDOM from 'react-dom';
import { FC, MouseEvent } from 'react';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.types';

// Определяем функциональный компонент Modal с типом ModalProps
const ModalINFO: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  // Если модалка не открыта, то ничего не рендерим
  if (!isOpen) return null;

  // Обработчик клика по заднему фону (backdrop)
  // Закроет модалку, только если клик был именно по фону, а не по содержимому
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // вызываем коллбэк закрытия
    }
  };

  // Возвращаем разметку модального окна, "вставленную" в portal
  return ReactDOM.createPortal(
    // Внешний div — фон/бэкдроп, перехватывает клик
    <div className={styles.modal__backdrop} onClick={handleBackdropClick}>
      {/* Внутренний div — сама модалка */}
      <div className={styles.modal__content}>
        {children} {/* Контент модалки (передаётся через props) */}
      </div>
    </div>,
    // Куда вставляется портал — div#modal-root (должен быть в index.html)
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default ModalINFO;
