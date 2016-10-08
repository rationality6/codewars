const grow = x => {
  return x.reduce((a, b) => a * b)
}


grow([1, 2, 3])
  // , 6);
grow([4, 1, 1, 1, 4])
  // , 16);
grow([2, 2, 2, 2, 2, 2])
  // , 64);
