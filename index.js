
class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    get diameter() {
      return this._radius * 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
  
    get area() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    set diameter(value) {
      this._radius = value / 2;
    }
  
    set circumference(value) {
      this._radius = calculateRadiusFromCircumference(value);
    }
  
    set area(value) {
      this._radius = calculateRadiusFromArea(value);
    }
  }
  function calculateRadiusFromCircumference(circumference) {
    return circumference / (2 * Math.PI);
  }
  
  function calculateRadiusFromArea(area) {
    return Math.sqrt(area / Math.PI);
  }
  
  module.exports = {
    calculateRadiusFromCircumference,
    calculateRadiusFromArea
  };