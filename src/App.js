import React from 'react';
import Container from './features/Container';
import Home from './features/Home';
import Navbar from './features/Navbar';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
