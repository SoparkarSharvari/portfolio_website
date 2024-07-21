import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProjects from './components/projects/MyProjects';
import LandingPage from './components/LandingPage';
import AboutMePage from './components/AboutMePage';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
function App() {
  return (
    <div className="App">
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
