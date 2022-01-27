import express from 'express';
import ejs from 'ejs';
import dataRouter from './routes/data.js';
import uploadRouter from './routes/upload.js';

const app = express();

app.set('veiw engine', ejs);
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/data', dataRouter);
app.use('/upload', uploadRouter);

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
