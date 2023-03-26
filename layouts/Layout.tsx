import { Navbar } from '@components/Navbar';
import { Sidebar } from '@components/Sidebar';
import { NavigationContextProvider } from '@context/navigationContext';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className='flex flex-col h-screen w-full md:flex-row'>
      <NavigationContextProvider>
        <Navbar />
        <Sidebar />
      </NavigationContextProvider>
      <section className='flex h-full w-full'>{children}</section>
    </main>
  );
};

export { Layout };
