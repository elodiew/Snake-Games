!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){i(2),t.exports=i(1)},function(t,e){},function(t,e,i){"use strict";i.r(e);class s{constructor(t,e){this.body=t,this.direction=e,this.ateApple=!1}advance(){const t=this.body[0].slice();switch(this.direction){case"left":t[0]-=1;break;case"right":t[0]+=1;break;case"down":t[1]+=1;break;case"up":t[1]-=1;break;default:throw"invalid direction"}this.body.unshift(t),this.ateApple?this.ateApple=!1:this.body.pop()}setDirection(t){let e;switch(this.direction){case"left":case"right":e=["up","down"];break;case"down":case"up":e=["left","right"];break;default:throw"invalid direction"}e.includes(t)&&(this.direction=t)}checkCollision(t,e){let i=!1,s=!1;const n=this.body[0],a=this.body.slice(1),o=n[0],r=n[1];(o<0||o>t-1||(r<0||r>e-1))&&(i=!0);for(let t=0;t<a.length;t++)o===a[t][0]&&r===a[t][1]&&(s=!0);return i||s}isEatingApple(t){const e=this.body[0];return e[0]===t.position[0]&&e[1]===t.position[1]}}class n{constructor(t){this.position=t}setNewPosition(t,e){const i=Math.round(Math.random()*(t-1)),s=Math.round(Math.random()*(e-1));this.position=[i,s]}isOnSnake(t){let e=!1;for(let i=0;i<t.body.length;i++)this.position[0]===t.body[i][0]&&this.position[1]===t.body[i][1]&&(e=!0);return e}}class a{static gameOver(t,e,i){t.save(),t.font="70px sans-serif",t.fillStyle="#000",t.textAlign="center",t.textBaseline="middle",t.strokeStyle="white",t.lineWidth=5,t.strokeText("Game Over",e,i-180),t.fillText("Game Over",e,i-180),t.font="bold 30px sans-serif",t.strokeText("Appuyer sur la touche Espace pour rejouer",e,i-120),t.fillText("Appuyer sur la touche Espace pour rejouer",e,i-120),t.restore()}static drawScore(t,e,i,s){t.save(),t.font="bold 150px sans-serif",t.fillStyle="#696969",t.textAlign="center",t.textBaseline="middle",t.fillText(s.toString(),e,i),t.restore()}static drawSnake(t,e,i){t.save(),t.fillStyle="rgb(30,144,255)";for(let s of i.body)this.drawBlock(t,s,e);t.restore()}static drawApple(t,e,i){const s=e/2,n=i.position[0]*e+s,a=i.position[1]*e+s;t.save(),t.fillStyle="rgb(0,0,128)",t.beginPath(),t.arc(n,a,s,0,2*Math.PI,!0),t.fill(),t.restore()}static drawBlock(t,e,i){const s=e[0]*i,n=e[1]*i;t.fillRect(s,n,i,i)}}class o{constructor(t=900,e=600){this.canvasWidth=t,this.canvasHeight=e,this.blockSize=30,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.widthInBlocks=this.canvasWidth/this.blockSize,this.heightInBlocks=this.canvasHeight/this.blockSize,this.centreX=this.canvasWidth/2,this.centreY=this.canvasHeight/2,this.delay=100,this.snakee,this.applee,this.score,this.timeOut}init(){this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.canvas.style.border="30px solid rgb(65,105,225)",this.canvas.style.margin="50px auto",this.canvas.style.display="block",this.canvas.style.backgroundColor="rgb(135,206,235)",document.body.appendChild(this.canvas),this.launch()}launch(){this.snakee=new s([[6,4],[5,4],[4,4],[3,4],[2,4]],"right"),this.applee=new n([10,10]),this.score=0,clearTimeout(this.timeOut),this.delay=100,this.refreshCanvas()}refreshCanvas(){if(this.snakee.advance(),this.snakee.checkCollision(this.widthInBlocks,this.heightInBlocks))a.gameOver(this.ctx,this.centreX,this.centreY);else{if(this.snakee.isEatingApple(this.applee)){this.score++,this.snakee.ateApple=!0;do{this.applee.setNewPosition(this.widthInBlocks,this.heightInBlocks)}while(this.applee.isOnSnake(this.snakee));this.score%5==0&&this.speedUp()}this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),a.drawScore(this.ctx,this.centreX,this.centreY,this.score),a.drawSnake(this.ctx,this.blockSize,this.snakee),a.drawApple(this.ctx,this.blockSize,this.applee),this.timeOut=setTimeout(this.refreshCanvas.bind(this),this.delay)}}speedUp(){this.delay/=2}}window.onload=()=>{let t=new o;t.init(),document.onkeydown=e=>{let i;switch(e.keyCode){case 37:i="left";break;case 38:i="up";break;case 39:i="right";break;case 40:i="down";break;case 32:return void t.launch();default:return}t.snakee.setDirection(i)}}}]);