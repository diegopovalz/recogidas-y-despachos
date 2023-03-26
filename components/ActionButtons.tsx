import { useState } from 'react';
import { useRecogidasContext } from '@context/recogidasContext';

const ActionButtons = () => {
  const { setOpenModalDespachos, setOpenModalRecogidas } =
    useRecogidasContext();

  return (
    <div className='flex items-center gap-2'>
      <button type='button' onClick={() => setOpenModalRecogidas(true)}>
        Nueva recogida
      </button>
      <button type='button' onClick={() => setOpenModalDespachos(true)}>
        Nueva despacho
      </button>
    </div>
  );
};
export { ActionButtons };
