import { Container } from '@mui/material';
import { useState } from 'react';
import CustomSpinner from './CustomSpinner.jsx';
import { Form } from './ImageForm.jsx';
import ImageUploadForm from './ImageUploadForm.jsx';
import TabPanel from './TabPanel.jsx';

const Jumbotron = () => {
  const [loading, setLoading] = useState(false);
  const [originalImage, setOriginalImage] = useState('');
  const [backgroundRemovedImageUrl, setBackgroundRemovedImageUrl] =
    useState('');

  return (
    <Container id="jumbotron">
      <h1>Remove Image Background</h1>
      <h2>100% Automatically and Free</h2>
      <Form
        backgroundRemovedImageUrl={backgroundRemovedImageUrl}
        setBackgroundRemovedImageUrl={setBackgroundRemovedImageUrl}
        setOriginalImage={setOriginalImage}
        setLoading={setLoading}
      />
      {/* <ImageUploadForm
        setBackgroundRemovedImageUrl={setBackgroundRemovedImageUrl}
      /> */}
      {loading ? (
        <CustomSpinner />
      ) : (
        <TabPanel
          backgroundRemovedImageUrl={backgroundRemovedImageUrl}
          originalImage={originalImage}
        />
      )}
    </Container>
  );
};
export default Jumbotron;
