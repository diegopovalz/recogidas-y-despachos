import { useNavigationContext } from '@context/navigationContext';
import { MdMenuOpen } from 'react-icons/md';

const Sidebar = () => {
  const { isOpen, setIsOpen } = useNavigationContext();

  return (
    <aside
      className={`${
        isOpen ? 'flex' : 'hidden'
      } sidebar-desktop sidebar-mobile md:flex flex-col justify-between bg-gray-800`}
    >
      <div className='flex flex-col gap-4'>
        <div className='md:hidden'>
          <button className='logo-white' onClick={() => setIsOpen(false)}>
            <MdMenuOpen />
          </button>
        </div>
        <div className='flex justify-center items-center bg-gray-900'>
          <img src='' alt='Logo' className='h-12 w-12' />
        </div>
        <nav>
          <ul className='flex flex-col gap-3'>
            <li>Resumen</li>
            <li>Recogidas</li>
            <li>Facturación</li>
            <li>Indicadores</li>
          </ul>
        </nav>
      </div>
      <button type='button'>Logout</button>
    </aside>
  );
};

export { Sidebar };
