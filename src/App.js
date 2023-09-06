// import {}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Component/Home'
import { Create } from './Component/Create';
import { Read } from './Component/Read'
import { Update } from './Component/Update'
import { Navbar } from './Component/Navbar';
import { Footer } from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />}> </Route>
          <Route path='/read' element={<Read />}> </Route>
          <Route path='/update' element={<Update />}> </Route>
        </Routes>

      </Router>
      <Footer />

    </div>
  );
}

export default App;
