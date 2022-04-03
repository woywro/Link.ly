import { RiCloseLine } from "react-icons/ri";
import { Portal } from "../../HOC/Portal";
import { CloseButton, ModalTitle, Overlay, ModalWrapper } from "./style";

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ title, open, onClose, children }: Props) => {
  const backdropVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const modalVariant = {
    visible: {
      transition: {
        scale: 0.75,
      },
    },
  };

  if (!open) return null;
  return (
    <Portal selector="#portal">
      <Overlay
        variants={backdropVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <ModalWrapper variants={modalVariant}>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton>
            <RiCloseLine onClick={onClose} />
          </CloseButton>
          {children}
        </ModalWrapper>
      </Overlay>
    </Portal>
  );
};
