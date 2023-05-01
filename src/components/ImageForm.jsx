import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

import { useForm } from 'react-hook-form';
import { url } from '../../config';

const Form = ({
  setBackgroundRemovedImageUrl,
  setLoading,
  setOriginalImage,
}) => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (data) => {
    const { imageUrl } = data;

    const headers = {
      'content-type': 'application/json',
      'X-RapidAPI-Key': import.meta.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.VITE_RAPID_API_HOST,
    };

    setLoading(true);

    await axios
      .post(`${url}/removeBackground`, { imageUrl }, { headers })
      .then((response) => {
        const ans = response.data.data.data.bgRemoved;
        setOriginalImage(imageUrl);
        setBackgroundRemovedImageUrl(ans);
        console.log(ans);
      })
      .finally(() => setLoading(false));
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <Box id="formBox">
      <div>
        <TextField
          id="imageLink"
          style={{ width: '100%' }}
          label="Photo URL"
          size="sm"
          variant="outlined"
          {...register('imageUrl', { required: true })}
        />
        <Button
          id="submitBtn"
          variant="outlined"
          style={{ width: '100%' }}
          type="submit"
          onClick={handleSubmit(onFormSubmit, onError)}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
};
export { Form };
