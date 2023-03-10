import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'leaflet/dist/leaflet.css';

import Home from './pages/Home/Home';
import Layout from './hoc/Layout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/fuel-calculator' element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
