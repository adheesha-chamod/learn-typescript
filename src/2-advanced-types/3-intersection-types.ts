// let weight: number & string;    // impossible -> not realistic

type Draggable = {
  drag: () => string;
};

type Resizable = {
  resize: () => string;
};

// intersecting types
type UIWidget = Draggable & Resizable;

const textBox: UIWidget = {
  drag: () => {
    return "drag";
  },
  resize: () => {
    return "resize";
  },
};

console.log(textBox.drag());
console.log(textBox.resize());
