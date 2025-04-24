import styles from './styles.module.css';
import ReactDOM from 'react-dom';
import { FC, ReactNode, MouseEvent } from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
