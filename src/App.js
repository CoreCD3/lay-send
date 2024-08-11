import React, { Fragment } from 'react';
import Container from './features/Container';
import Home from './features/Home';
import Navbar from './features/Navbar';
import './index.css';
 
function App() {
  return (
    <Fragment>
    <Navbar />
    <Container>
      <Home />
    </Container>
  </Fragment>
  );
}

export default App;
