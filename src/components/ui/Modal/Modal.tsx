import '../../../assets/css/main.css';
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
    <div className="backdrop" onClick={handleBackdropClick}>
      <div className="bg-[var(--white)] p-[24px] rounded-[12px] shadow-lg min-w-[300px] max-w-[90vw]">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
