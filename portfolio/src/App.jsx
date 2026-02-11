// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';       // your default home (the simple one)
import Home1 from './pages/Home1';     // the portfolio-style home (from template)

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //     <Route path="/" element={<Home1 />} />
    //   </Routes>
    // </Router>
    <Home1 />
  );
}

export default App;