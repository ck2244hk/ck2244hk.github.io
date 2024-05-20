
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Privacy from './pages/Privacy.js';
import Travel from './pages/Travel.js';
import NotFound from './NotFound.js';
import Header from './components/header.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<div><Header selectedInd={0} /> <Home /></div>} />
          <Route path="/travel" element={<div><Header selectedInd={1} /><Travel /></div>} />
          <Route path="/contact" element={<div><Header selectedInd={2} /><Contact /></div>} />
          <Route path="/privacy" element={<div><Header selectedInd={3} /><Privacy /></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
