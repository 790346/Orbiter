function Orbiter(loc, theta, angularVelocity, amp){
  this.loc = new JSVector(100,100);

  this.angle = 0;
  this.amp = amp;
  this.angVel = angularVelocity;
  this.clr = "rgba(250, 10,10,1)";
}

Orbiter.prototype.update = function(){
   this.angle += this.angVel;
   console.log(movers[0].loc.x);
   this.loc.x = movers[0].loc.x + Math.cos(this.theta)*this.amp;
   this.loc.y = movers[0].loc.y + Math.sin(this.theta)*this.amp;
   this.render();
}

Orbiter.prototype.render = function(){

   ctx.fillStyle = this.clr;
   ctx.beginPath();
   ctx.arc(this.loc.x, this.loc.y, 12, Math.PI*2,0,false);

   ctx.stroke();
   ctx.fill();
}
