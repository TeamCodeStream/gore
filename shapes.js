class Rectangle {
  constructor(x,y) {
    this.x = x
    this.y = y
  }

  getArea() {
    return this.x * this.y
  }
}

class Square extends Rectangle {
  constructor(x) {
    super(x, x)
  }
}

class Circle {
  constructor(circumference, radius) {
    this.circumference = circumference
    this.radius = radius
  }

  getArea() {
    return Math.Pi * squared(this.radius)
  }
}

class Trapezoid {
  constructor(a, b, height) {
    this.a = a;
    this.b = b;
    this.height = height;
  }

  getArea() {
      return .5 * (a + b) * h;
  }
}