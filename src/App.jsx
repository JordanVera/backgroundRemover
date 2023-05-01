import { useState } from 'react';
import { Form } from './components/ImageForm.jsx';
import DesktopAppBar from './components/DesktopAppBar.jsx';
import { Container } from '@mui/material';
import Jumbotron from './components/Jumbotron.jsx';

function App() {
  return (
    <>
      <DesktopAppBar />
      <Container>
        <Jumbotron />
      </Container>
    </>
  );
}

export default App;
