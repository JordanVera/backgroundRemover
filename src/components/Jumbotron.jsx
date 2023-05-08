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
      <div className="headers">
        <h1>Remove Image Background</h1>
        <h2>
          100% Automatic and Free | Remove Backgrounds from Images Using
          Artificial Intelligence
        </h2>
        <p>
          Please use a web URL. Right now the application does not support file
          uploads, we are working on this and hope to have this feature working
          soon!
        </p>
      </div>
      <p>
        EX:{' '}
        <a href="https://tinyurl.com/259tpd75" target="_blank" rel="noreferrer">
          https://tinyurl.com/259tpd75
        </a>
      </p>
      <p>
        EX:{' '}
        <a href="https://tinyurl.com/4jprn59x" target="_blank" rel="noreferrer">
          https://tinyurl.com/4jprn59x
        </a>
      </p>

      <p>
        EX:{' '}
        <a href="https://tinyurl.com/bdh468vt" target="_blank" rel="noreferrer">
          https://tinyurl.com/bdh468vt{' '}
        </a>
      </p>
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
