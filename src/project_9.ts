//Project: Shape Renderer
//Part A
class Circle {
  constructor(public radius: number) {}
}
class Square {
  constructor(public side: number) {}
}

function render(shape: Circle | Square): string {
  if (shape instanceof Circle) {
    return `Circle radius: ${shape.radius}`;
  } else {
    return `Square Side: ${shape.side}`;
  }
}

const circle = new Circle(100);
const square = new Square(150);

console.log(render(circle));
console.log(render(square));

//Part B
type CirclePlain = { radius: number };
type SquarePlain = { side: number };

function isCirclePlain(
  shape: { radius: number } | { side: number },
): shape is CirclePlain {
  return (shape as CirclePlain).radius !== undefined;
}

function renderPlain(shape: CirclePlain | SquarePlain): string {
  if (isCirclePlain(shape)) {
    return `Circle radius: ${shape.radius}`;
  } else {
    return `Square side: ${shape.side}`;
  }
}

const circlePlain: CirclePlain = { radius: 10 };
const squarePlain: SquarePlain = { side: 15 };

console.log(renderPlain(circlePlain));
console.log(renderPlain(squarePlain));
