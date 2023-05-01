import axios from 'axios';
const removeBackgroundFromImage = async (req, res, next) => {
  console.log('imageUrl ' + req.body.imageUrl);
  const options = {
    method: 'POST',
    url: 'https://ai-background-remover.p.rapidapi.com/webMatting/mattingByUrl2',
    params: {
      url: `${req.body.imageUrl}`,
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': process.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.VITE_RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);

    console.log(response.data);
    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error(error.response);
  }
};

export default removeBackgroundFromImage;
