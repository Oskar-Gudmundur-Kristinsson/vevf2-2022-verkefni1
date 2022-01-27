import multer from 'multer';
import express from 'express';

const upload = multer();

/*
app.post('/single', upload.single('data'), (req, res) => {
  const {
    originalname: filename = '',
    mimetype = '',
    buffer = null,
  } = req.file;

  res.send(
    `Innihald ${filename} af gerð ${mimetype} er ${buffer.toString('utf8')}`,
  );
});

app.post('/many', upload.array('data'), (req, res) => {
  const names = req.files.map((i) => i.originalname).join(', ');
  const mimetypes = req.files.map((i) => i.mimetype).join(', ');

  res.send(
    `${req.files.length} skrár, með skráarnöfn ${names} af týpum ${mimetypes}`,
  );
});
*/
//  the data should be processed based on the route("/:id") where the id ie. /3 opens /data/data3.txt and processes it
