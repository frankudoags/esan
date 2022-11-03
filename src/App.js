import React from 'react';
import { Navbar, Home, NotFound } from "./components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className='max-w-7xl mx-auto'>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
