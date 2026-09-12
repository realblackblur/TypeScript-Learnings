//Project: Shape Renderer
//Part A
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
}
class Square {
    side;
    constructor(side) {
        this.side = side;
    }
}
function render(shape) {
    if (shape instanceof Circle) {
        return `Circle radius: ${shape.radius}`;
    }
    else {
        return `Square Side: ${shape.side}`;
    }
}
const circle = new Circle(100);
const square = new Square(150);
console.log(render(circle));
console.log(render(square));
function isCirclePlain(shape) {
    return shape.radius !== undefined;
}
function renderPlain(shape) {
    if (isCirclePlain(shape)) {
        return `Circle radius: ${shape.radius}`;
    }
    else {
        return `Square side: ${shape.side}`;
    }
}
const circlePlain = { radius: 10 };
const squarePlain = { side: 15 };
console.log(renderPlain(circlePlain));
console.log(renderPlain(squarePlain));
export {};
//# sourceMappingURL=project_9.js.map