function Circle( radius){
    this.radius=radius;
    this.area=radius*radius/2
}
const circle1= new Circle(7);
console.log(circle1.area);

const circle2= new Circle(8);
console.log(circle2.area);