function createCircle(radius){
return{
    radius,
    area:22/7*radius*radius,
        draw:function(){
        console.log("Draw method");
    }
}
}
const circle= createCircle(2);
console.log(circle.radius,circle.area);