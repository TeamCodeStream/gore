//comment 1
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
