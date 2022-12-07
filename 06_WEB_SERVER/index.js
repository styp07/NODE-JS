import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const app = express()

// servir contenido estatico

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

app.use(express.static('public'))

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html')
  })

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html')
  })

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
  })
  
app.listen(8080) 