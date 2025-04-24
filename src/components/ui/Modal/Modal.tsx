import styles from './styles.module.css';
import ReactDOM from 'react-dom';
import { FC, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
