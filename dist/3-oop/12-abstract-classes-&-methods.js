"use strict";
class Shape {
    constructor(colour) {
        this.colour = colour;
    }
}
class Circle extends Shape {
    constructor(radius, colour) {
        super(colour);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
const circle = new Circle(10, "red");
circle.render();
