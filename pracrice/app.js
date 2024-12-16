function calculateArea(shape, dimension) {
  if (!shape || !Array.isArray(dimension)) {
    console.log("Error");
  }
  shape = shape.toLowerCase();

  switch (shape) {
      case "rectangle":
          if (dimension.length !== 2 || dimension[0] <= 0 || dimension[1] <= 0) {
              console.log("Error");
          }
          return dimension[0] * dimension[1];
      case 'circle':
          if (dimension[0] <= 0 || dimension.length !== 1) {
              console.log("Error");
          }
          return parseFloat((Math.PI * Math.pow(dimension[0], 2)).toFixed(2));
      case 'triangle':
          if (dimension.length !== 2 || dimension[0] <= 0 || dimension[1] <= 0) {
              console.log("Error");
          }
          return 0.5 * dimension[0] * dimension[1];
      default:
          console.log("Not Recognize");
  }
}
console.log(calculateArea("rectangle", [2, 3]));
console.log(calculateArea("circle", [2]));
console.log(calculateArea("triangle", [2, 3]));
console.log(calculateArea("cuboid", [2, 3]));
