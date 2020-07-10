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
    // more changes
  }
}

class Circle {
  constructor(circumference, radius) {
    // change 1
    this.circumference = circumference
    this.radius = radius
  }

  getArea() {
    // change 2
    return Math.Pi * squared(this.radius)
  }
}
