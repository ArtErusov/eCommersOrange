import ReactDOM from 'react-dom';
import { FC, MouseEvent } from 'react';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.types';

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles['modal__backdrop']} onClick={handleBackdropClick}>
      <div className={styles['modal__content']}>{children}</div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
