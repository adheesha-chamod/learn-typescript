abstract class Shape {
  constructor(public colour: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, colour: string) {
    super(colour);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

// const shape = new Shape("red");      // compile error
const circle = new Circle(10, "red");
circle.render();
