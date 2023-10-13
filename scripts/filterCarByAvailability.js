function filterCarByAvailability(cars) {
  if (cars.length <= 1) return cars;
  return cars.reduce((total, car) => {
    if (!total || car.available) {
      total.push(car);
    }
    return total;
  }, []);
}
