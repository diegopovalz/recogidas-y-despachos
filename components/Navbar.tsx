import { useNavigationContext } from '@context/navigationContext';
import { MdMenu, MdMenuOpen } from 'react-icons/md';

export const Navbar = () => {
  const { isOpen, setIsOpen } = useNavigationContext();

  return (
    <nav className='flex justify-between gap-2 md:hidden items-center px-1'>
      <div className='flex items-center'>
        <button
          type='button'
          className='logo-dark'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdMenuOpen /> : <MdMenu />}
        </button>
      </div>
      <div>
        <span>Nombre de la app</span>
      </div>
      <div>Logo</div>
    </nav>
  );
};
