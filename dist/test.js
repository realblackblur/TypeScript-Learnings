"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const area51 = new Rectangle(10, 3);
new Shape();
//# sourceMappingURL=test.js.map