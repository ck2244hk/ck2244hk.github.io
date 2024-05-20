
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
      <Header></Header>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
