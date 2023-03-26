import { useRecogidasContext } from '@context/recogidasContext';
import { FormEvent } from 'react';
import { Modal } from './Modal';

const ModalDespachos = () => {
  const { openModalDespachos, setOpenModalDespachos } = useRecogidasContext();

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Modal
      open={openModalDespachos}
      setOpen={setOpenModalDespachos}
      modalTitle='Crear nuevo despacho'
    >
      <div>Este es el modal para crear un despacho</div>
    </Modal>
  );
};
export { ModalDespachos };
