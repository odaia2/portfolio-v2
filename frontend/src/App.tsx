import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProjectListPage from './pages/ProjectListPage';
import CreateProjectPage from './pages/CreateProjectPage';
import './Style/Style.css';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<h2>Velkommen til Prosjektportefølje</h2>} />
          <Route path="/projects" element={<ProjectListPage />} />
          <Route path="/create-project" element={<CreateProjectPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
