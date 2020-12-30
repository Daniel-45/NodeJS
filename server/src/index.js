import path from 'path'
import logger from 'morgan'
import express from 'express'
import bodyParser from 'body-parser'

const app = express();

// Settings
const PORT = 9000;
const routes = require('./routes/rutas');

app.disable('x-powered-by');
app.set('env', 'development');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'public/views'));
app.set('layouts', path.join(__dirname, 'public/views/layouts'));

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`El servidor escuchando en http://localhost:${PORT}`);
});