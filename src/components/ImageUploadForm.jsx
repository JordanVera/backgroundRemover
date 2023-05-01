import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FileUpload from 'react-mui-fileuploader';
import { url } from '../../config';

const ImageUploadForm = ({ setBackgroundRemovedImageUrl }) => {
  const [loading, setLoading] = useState();
  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (data) => {
    const { imageUrl } = data;

    const headers = {
      'content-type': 'application/json',
      'X-RapidAPI-Key': import.meta.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.VITE_RAPID_API_HOST,
    };

    await axios
      .post(`${url}/removeBackground`, { imageUrl }, { headers })
      .then((response) => {
        const ans = response.data.data.data.bgRemoved;
        setBackgroundRemovedImageUrl(ans);
        console.log(ans);
      })
      .finally(() => setLoading(false));
  };

  const onError = (error) => {
    console.log(error);
  };
  return (
    <Box>
      <form id="promptForm" onSubmit={handleSubmit(onFormSubmit, onError)}>
        <FileUpload
          name="image"
          multiFile={false}
          title="Upload a file to remove the background"
          header="[Drag to drop]"
          leftLabel="or"
          rightLabel="to select files"
          buttonLabel="click here"
          buttonRemoveLabel="Remove all"
          maxFileSize={10}
          allowedExtensions={['jpg', 'jpeg', 'png']}
          {...register('imageUrl', { required: true })}
        />
        <Button type="submit">Upload</Button>
      </form>
    </Box>
  );
};
export default ImageUploadForm;
