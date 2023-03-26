import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalTitle: string;
  children: JSX.Element | JSX.Element[];
}

const Modal = ({ open, setOpen, modalTitle, children }: ModalProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{modalTitle}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
export { Modal };
