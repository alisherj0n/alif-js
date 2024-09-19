const calculateCircleArea = radius => {
  if (radius < 0) {
    throw new Error('Radius cannot be negative');
  }

  const area = Math.PI * Math.pow(radius, 2); // s = π * r^2
  return area;
};

const radius = 5;
const area = calculateCircleArea(radius);
console.log(
  `The area of the circle with radius ${radius} meters is ${area} square meters.`
);
