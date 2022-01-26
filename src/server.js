import express from 'express';
import multer from 'multer';

const upload = multer();

const app = express();

var i = 0;

app.use('/', express.static('public'));

//the bellow comment is retarded use ejs veiws WITH PARTICIAL VIEWS https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
// and can be done statically with this https://www.includehelp.com/node-js/ejs-for-loops.aspx 
//TODO create helper functions that send in the fluff ie the header and stylesheet like in lines 15-33 and then add the real response and another helper for the footers and whatnot
//          this can be done with a router that always initially tacks on the fluff to the res 

app.get('/data', (req, res) => {
  res.render("index");
});

//the data should be processed based on the route("/:id") where the id ie. /3 opens /data/data3.txt and processes it

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

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});