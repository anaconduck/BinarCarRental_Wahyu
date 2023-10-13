function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  
  // Loop selama kurang dari panjang input array 
  for (let i = 0; i < cars.length; i++) {
    // Cek jika semua bernilai true
    if (cars[i].available === true) {
      // tambahkan dengan ke result dengan push
        result.push(cars[i]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
