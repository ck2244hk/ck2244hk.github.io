
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Privacy from './pages/Privacy.js';
import Travel from './pages/Travel.js';
import NotFound from './NotFound.js';
import FloatNavBar from './components/floatingNavBar.js';
import HomeBackgroundCanvas from './canvas/HomeBack.js'
import Experience from './pages/Experience.js';

function App() {
  return (
    <Router>
      <div className="App">
        <HomeBackgroundCanvas />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
