type HeaderProps = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

export default function Header({ toggleDarkMode, darkMode }: HeaderProps) {
  const handleScrollToProject = () => {
    const createProjectSection = document.getElementById('create-project');
    if (createProjectSection) {
      createProjectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="header" className="main-header">
      <div className="header-content">
        <h1>Why Wait? Start Your Project Now!</h1>
        <p>Make your awesome project idea a reality with this simple portfolio tool, custom made for modern projects.</p>
        <div className="header-buttons">
          <button className="primary-btn" onClick={handleScrollToProject}>
            Get Started
          </button>
          <button className="secondary-btn" onClick={toggleDarkMode}>
            {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
}
