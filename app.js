'use strict';

let express = require('express');
let app = express();
let io = require('socket.io').listen(app.listen(1337));
let fs = require('fs');
var request = require('request');
var concat = require('concat-stream');
//let video = require('./public/content/[HorribleSubs] Naruto Shippuuden - 448 [1080p].mkv');

app.use('/lib/', express.static(__dirname + '/lib'));
app.use('/app/', express.static(__dirname + '/app'));
app.use('/css/', express.static(__dirname + '/css'));
app.use('/img/', express.static(__dirname + '/img'));
app.use('/views/', express.static(__dirname + '/public/views'));

app.get('/', function(req, res){
  res.sendFile('./public/index.html', { root : __dirname});
});

io.on('connection', function(socket) {

  /*
  *
  fs.readFile('rene-laennecs-235th-birthday-5654467158474752-hp2x.jpg', function(err, buf){
    socket.emit('video', {video: true, buffer: buf.toString('base64')});
  });

  /*
  * Music Streaming: Works fine!
  *
  fs.readFile('Charli_XCX_-_Break_The_Rules_Official_Video.mp3', function(err, buf){
    socket.emit('video', {video: true, buffer: buf.toString('base64')});
  });*/
  /*Video streaming: Fails to run toString();
  */
  let video = fs.createReadStream('Charli_XCX_-_Break_The_Rules_[Official_Video].mp4');
   video.on('data', function(data){
     //socket.send({video: true, buffer: data});
     console.log(data.length);
     socket.emit('video', {video: true, buffer: data.toString('base64')});
     //.toString('base64')
   });

/*   video.on('end', function(){
     Stream(video);
   });

   let Stream = function(video){
     console.log(video);
     socket.emit('video', {video: true, buffer: video});
   }*/

  //socket.emit('video').pipe(fs.createReadStream('Charli_XCX_-_Break_The_Rules_[Official_Video].mp4'));
  //fs.createReadStream('Charli_XCX_-_Break_The_Rules_[Official_Video].mp4').pipe(request.);
});

let server = app.listen(8000, 'localhost', function(){
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Running at ${host}:${port}`);
});
