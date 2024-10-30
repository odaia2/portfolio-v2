import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/">Hjem</Link>
      <Link to="/projects">Prosjektliste</Link>
      <Link to="/create-project">Opprett Prosjekt</Link>
    </nav>
  );
}