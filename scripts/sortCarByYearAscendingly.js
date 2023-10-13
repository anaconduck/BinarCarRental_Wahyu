function sortCarByYearAscendingly(cars) {
  // declare result with spread operator to avoid side  effect
  const result = [...cars];

  // Tulis code-mu disini

  // Loop mulai dari index 0
  for (let i = 0; i < result.length; i++) {
    //Loop mulai dari index 1
    for (let j = 0; j < result.length - 1; j++) {
      // Algoritma Bubble Sort
      if (result[j].year > result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result
  
}
