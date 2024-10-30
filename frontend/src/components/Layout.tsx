import { FC, useState, ReactNode } from 'react';
import Header from './Header';
import Nav from './Nav';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Nav />
      <main>{children}</main>
      <footer>Prosjektportefølje</footer>
    </div>
  );
};

export default Layout;