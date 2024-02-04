import React, { useEffect, useState } from 'react';

const InfoCarComponent = ({ carId }) => {
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    // Отримуємо дані з localStorage
    const storedCatalogData = localStorage.getItem("catalog");
    const parsedCatalog = JSON.parse(storedCatalogData);

    // Модифікуємо каталог, якщо потрібно
    const catalog = parsedCatalog.map((car) => ({
      ...car,
      price: parseInt(car.price, 10),
    }));

    // Знаходимо обраний автомобіль за carId
    const foundCar = catalog.find((car) => car.id === carId);
    setSelectedCar(foundCar);
  }, [carId]);
console.log(selectedCar);
  // Повертаємо інформацію про обраний автомобіль
  return (
    <div>
         <p>Айді авто: {carId}</p>

      {selectedCar ? (
        <>
          <h2>{selectedCar.name}</h2>
          <img src={selectedCar.img} alt={selectedCar.name} />
          <p>Опис: {selectedCar.desc}</p>
          {/* Додайте інші поля, які вам потрібні */}
        </>
      ) : (
        <p>Авто з ID {carId} не знайдено</p>
      )}
    </div>
  );
};

export default InfoCarComponent;
