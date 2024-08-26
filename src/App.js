import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GetString from './components/GetString';
import UpdateStringComponent from './components/UpdateStringComponent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-string" element={<GetString />} />
        <Route path="/update-string" element={<UpdateStringComponent />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
