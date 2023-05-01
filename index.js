import dotenv from 'dotenv';
import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import colors from 'colors';
import router from './server/routes/removeBackgroundFromImage.js';
import helmet from 'helmet';

const app = express();

const port = process.env.PORT || 5555;

dotenv.config();

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(morgan('tiny'));
app.use(cors({ origin: '*', credentials: true }));
app.use(helmet());

app.use((req, res, next) => {
  console.log('req.body'.green);
  console.log(req.body);

  next();
});

app.use('/', router);

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('./dist'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(path.resolve(path.dirname('')), '/dist/index.html'));
//   });
// }

app.listen(port, () => {
  console.log(`App listening on port ${port}`.blue);
});

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('MONGODB Connected'.yellow);
//     app.listen(port, () => {
//       console.log(`App listening on port ${port}`.blue);
//     });
//   })
//   .catch((err) => console.log(err.message));
