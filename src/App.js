import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MyProjects from './components/projects/MyProjects';
import LandingPage from './components/LandingPage';
import AboutMePage from './components/AboutMePage';
import Certificates from './components/Certificates';
import Experience from './components/Experience';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div
        className="cursor"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/myprojects" element={<MyProjects/>}/>
          <Route path="/About_Sharvari_Soparkar" element={<AboutMePage/>}/>
          <Route path="/certificates" element={<Certificates/>}/>
          <Route path="/experience" element={<Experience/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
