import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProjectListPage from './pages/ProjectListPage';
import CreateProjectPage from './pages/CreateProjectPage';
import AboutMe from './components/AbutMe';
import './Style/Style.css';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <h2>Velkommen til Prosjektportefølje</h2>
                <AboutMe /> {/* Legg til AboutMe på hovedsiden */}
              </>
            } 
          />
          <Route path="/projects" element={<ProjectListPage />} />
          <Route path="/create-project" element={<CreateProjectPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}