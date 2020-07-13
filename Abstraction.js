//Abstration in javascript 
//location is abstration variable which we can not access out side the circle method directly 
//while radius we can access by making new object, we make that abstracted varible using let keyword.
function Circle(radius){
    this.radius=radius;
    console.log(this)
     let location={x:0, y:1}
  let com= function(fac){
  
  }
    this.draw=function(){
         com(3);
  console.log(draw);
    }
  }
  const cir = new Circle(9);
  console.log(cir.location);
  console.log(cir.radius);
  console.log(this);
