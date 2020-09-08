Stream = require('node-rtsp-stream')
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
var path = require("path");
// let Stream = require('node-rtsp-stream-es6')
 
// let options = {
//   name: 'Stream',
//   url: 'rtsp://93.47.192.183:554/live/ch00_0',
//   port: 9000
// }
 
// stream = new Stream(options)
 
// stream.start()

// app.set("view options", {layout: false});
//      app.use(express.static(__dirname + '/views'));

// app.get('/',(req,res)=>{
//   res.render('index.html')
// })
    
     





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


 
// const server = http.createServer((request, response) => {
  
//      response.end("...");
// });
// server.listen(9000);
// //1234 portuna gelecek olan tüm istekleri socket tarafından dinlememiz gerekmektedir.
// const io = socket.listen(server); 





