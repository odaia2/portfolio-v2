type HeaderProps = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

export default function Header({ toggleDarkMode, darkMode }: HeaderProps) {
  return (
    <header id="header" className="main-header" data-info="Dette er header">
      <h1>Prosjektportefølje</h1>
      <button type="button" id="dark-mode" onClick={toggleDarkMode}>
        {darkMode ? 'Slå av darkmode' : 'Slå på darkmode'}
      </button>
    </header>
  );
}
