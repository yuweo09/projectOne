// particle.min.js hosted on GitHub
// Scroll down for initialisation code

!function(a){var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;"function"==typeof define&&define.amd?define(["exports"],function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,this.g=a.g,this.particleColor=a.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*a.options.velocity,y:(Math.random()-.5)*a.options.velocity}};return c.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff",background:void 0!==b.background?b.background:"#1a252f",interactive:void 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",function(a){this.p.x=a.clientX-this.canvas.offsetLeft,this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});

// Initialisation

var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#A239CA',
  background: '#000000',
  interactive: true,
  speed: 'high',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);
SC.initialize({
  client_id: '8b8c9f6cb9ff0c2479d1c1ead48eefd2'
});

var $submitButton = $('#artist');
var id;
var sondid;

// find all sounds of buskers licensed under 'creative commons share alike'

// find all sou<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/256526769&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>nds of buskers licensed under 'creative commons share alike'

$('#submit').click(function(event) {
  event.preventDefault();
  var s = $submitButton.val().split(" ");

  SC.get('/users', {
    q:s[0] , username:s[0]
  }).then(function(tracks) {

    id=tracks[0].id;
    return SC.get('/tracks', {
      q:s[1], user_id: id
    });

  })
.then(function(tracks) {
  sondid = tracks[0].id;
  var $xhr = $.getJSON(`https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://api.soundcloud.com/tracks/${sondid}&client_id=8b8c9f6cb9ff0c2479d1c1ead48eefd2`);

  $xhr.done(function(track) {
    var count = 0;
    SC.oEmbed(track.permalink_url, {
      element: document.getElementById('target')
    });
  });

  $xhr.fail(function() {
    if ($xhr.status === 403) {
      console.log('Hello');
    }

  });
});



});
// gapi.load('client', init);
// // After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }
//
// // Search for a specified string.
//
// function search() {
//
//   var q = $('#query').val();
//   console.log(q);
//   console.log();
//   var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });
//
//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }
// function init() {
//        gapi.client.setApiKey('AIzaSyBriEbGo4fKEI6ugSA_n27opC2IRn5DB8g');
//        gapi.client.load('youtube', 'v3');
//       //   console.log( gapi.client.setApiKey);
//       //  gapi.client.setApiKey ='AIzaSyBriEbGo4fKEI6ugSA_n27opC2IRn5DB8g';
//       //  console.log( gapi.client.setApiKey);
//        console.log(gapi);
//        console.log(gapi.client);
//        console.log( gapi.client.youtube);
//        console.log( gapi.client.youtube.search);
//        handleAPILoaded();
//      }
//
//
// // /*=============================================================================*/
// // /* Smooth Trail
// // /*=============================================================================*/
// // var smoothTrail = function(c, cw, ch){
// //
// // /*=============================================================================*/
// // /* Initialize
// // /*=============================================================================*/
// //   this.init = function(){
// //     this.loop();
// //   };
// //
// //   /*=============================================================================*/
// //   /* Variables
// // /*=============================================================================*/
// //   var _this = this;
// //   this.c = c;
// //   this.ctx = c.getContext('2d');
// //   this.cw = cw;
// //   this.ch = ch;
// //   this.mx = 0;
// //   this.my = 0;
// //
// //   //trail
// //   this.trail = [];
// //   this.maxTrail = 200;
// //   this.mouseDown = false;
// //
// //   this.ctx.lineWidth = .1;
// //   this.ctx.lineJoin = 'round';
// //
// //   this.radius = 1;
// //   this.speed = 0.4;
// //   this.angle = 0;
// //   this.arcx = 0;
// //   this.arcy = 0;
// //   this.growRadius = true;
// //   this.seconds = 0;
// //   this.milliseconds = 0;
// //
// //   /*=============================================================================*/
// //   /* Utility Functions
// // /*=============================================================================*/
// //   this.rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);};
// //   this.hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2){return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);};
// //
// //   /*=============================================================================*/
// //   /* Create Point
// // /*=============================================================================*/
// //   this.createPoint = function(x, y){
// //     this.trail.push({
// //       x: x,
// //       y: y
// //     });
// //   };
// //
// //   /*=============================================================================*/
// //   /* Update Trail
// // /*=============================================================================*/
// //   this.updateTrail = function(){
// //
// //     if(this.trail.length < this.maxTrail){
// //       this.createPoint(this.arcx, this.arcy);
// //     }
// //
// //     if(this.trail.length >= this.maxTrail){
// //       this.trail.splice(0, 1);
// //     }
// //   };
// //
// //   /*=============================================================================*/
// //   /* Update Arc
// // /*=============================================================================*/
// //   this.updateArc = function(){
// //     this.arcx = (this.cw/2) + Math.sin(this.angle) * this.radius;
// //     this.arcy = (this.ch/2) + Math.cos(this.angle) * this.radius;
// //     var d = new Date();
// //     this.seconds = d.getSeconds();
// //     this.milliseconds = d.getMilliseconds();
// //     this.angle += this.speed*(this.seconds+1+(this.milliseconds/1000));
// //
// //     if(this.radius <= 1){
// //       this.growRadius = true;
// //     }
// //     if(this.radius >= 200){
// //       this.growRadius = false;
// //     }
// //
// //     if(this.growRadius){
// //       this.radius += 1;
// //     } else {
// //       this.radius -= 1;
// //     }
// //   };
// //
// //   /*=============================================================================*/
// //   /* Render Trail
// // /*=============================================================================*/
// //   this.renderTrail = function(){
// //     var i = this.trail.length;
// //
// //     this.ctx.beginPath();
// //     while(i--){
// //       var point = this.trail[i];
// //       var nextPoint = (i == this.trail.length) ? this.trail[i+1] : this.trail[i];
// //
// //       var c = (point.x + nextPoint.x) / 2;
// //       var d = (point.y + nextPoint.y) / 2;
// //       this.ctx.quadraticCurveTo(Math.round(this.arcx), Math.round(this.arcy), c, d);
// //
// //
// //
// //     };
// //     this.ctx.strokeStyle = 'hsla('+this.rand(170,300)+', 100%, '+this.rand(50, 75)+'%, 1)';
// //     this.ctx.stroke();
// //     this.ctx.closePath();
// //
// //   };
// //
// //
// //   /*=============================================================================*/
// //   /* Clear Canvas
// // /*=============================================================================*/
// //   this.clearCanvas = function(){
// //     //this.ctx.globalCompositeOperation = 'source-over';
// //     //this.ctx.clearRect(0,0,this.cw,this.ch);
// //
// //     this.ctx.globalCompositeOperation = 'destination-out';
// //     this.ctx.fillStyle = 'rgba(0,0,0,.1)';
// //     this.ctx.fillRect(0,0,this.cw,this.ch);
// //     this.ctx.globalCompositeOperation = 'lighter';
// //   };
// //
// //   /*=============================================================================*/
// //   /* Animation Loop
// // /*=============================================================================*/
// //   this.loop = function(){
// //     var loopIt = function(){
// //       requestAnimationFrame(loopIt, _this.c);
// //       _this.clearCanvas();
// //       _this.updateArc();
// //       _this.updateTrail();
// //       _this.renderTrail();
// //     };
// //     loopIt();
// //   };
// //
// // };
// //
// // /*=============================================================================*/
// // /* Check Canvas Support
// // /*=============================================================================*/
// // var isCanvasSupported = function(){
// //   var elem = document.createElement('canvas');
// //   return !!(elem.getContext && elem.getContext('2d'));
// // };
// //
// // /*=============================================================================*/
// // /* Setup requestAnimationFrame
// // /*=============================================================================*/
// // var setupRAF = function(){
// //   var lastTime = 0;
// //   var vendors = ['ms', 'moz', 'webkit', 'o'];
// //   for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
// //     window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
// //     window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
// //   };
// //
// //   if(!window.requestAnimationFrame){
// //     window.requestAnimationFrame = function(callback, element){
// //       var currTime = new Date().getTime();
// //       var timeToCall = Math.max(0, 16 - (currTime - lastTime));
// //       var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
// //       lastTime = currTime + timeToCall;
// //       return id;
// //     };
// //   };
// //
// //   if (!window.cancelAnimationFrame){
// //     window.cancelAnimationFrame = function(id){
// //       clearTimeout(id);
// //     };
// //   };
// // };
// //
// // /*=============================================================================*/
// // /* Define Canvas and Initialize
// // /*=============================================================================*/
// //   if(isCanvasSupported){
// //     var c = document.createElement('canvas');
// //     c.width = 400;
// //     c.height = 400;
// //     var cw = c.width;
// //     var ch = c.height;
// //     document.body.appendChild(c);
// //     var cl = new smoothTrail(c, cw, ch);
// //
// //     setupRAF();
// //     cl.init();
// //   }
