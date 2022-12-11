import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs'
import * as dotenv from 'dotenv';// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();  

const port = process.env.port;

const app = express()

// servir contenido estatico

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Jairo Rodriguez',
    titulo: 'Curso Node'
  });
})

app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Jairo Rodriguez',
    titulo: 'Curso Node'
  });
})

app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Jairo Rodriguez',
    titulo: 'Curso Node'
  });
})

app.get('*', function (req, res) {
  res.render('404', {
    nombre: 'Jairo Rodriguez',
    titulo: 'Curso Node'
  });
})

app.listen(port);