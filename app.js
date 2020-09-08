Stream = require('node-rtsp-stream')
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
var path = require("path");

     





   stream = new Stream({
     name: 'name',
     streamUrl: 'rtsp://93.47.192.183:554/live/ch00_0',
     wsPort: 9000,
     ffmpegOptions: { // options ffmpeg flags
       '-stats': '', 
       '-r': 20, 
       '-q:v': 32, 
    '-b': '2000K' 
     }
   })


 





