import React, { useEffect, useState } from "react";
import EditCarComponent from "../EditCar/EditCar";

const InfoCarComponent = ({ carId, updateCatalog, closeModal }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const getUser = localStorage.getItem("token");
  const getAuthor = JSON.parse(getUser);
  const storedCatalogData = localStorage.getItem("catalog");
  const parsedCatalog = JSON.parse(storedCatalogData);

  // Модифицируем каталог, если нужно
  const catalog = parsedCatalog.map((car) => ({
    ...car,
    price: parseInt(car.price, 10),
  }));

  useEffect(() => {
    // Получаем данные из localStorage
    const storedCatalogData = localStorage.getItem("catalog");
    const parsedCatalog = JSON.parse(storedCatalogData);

    // Модифицируем каталог, если нужно
    const catalog = parsedCatalog.map((car) => ({
      ...car,
      price: parseInt(car.price, 10),
    }));

    // Находим выбранный автомобиль по carId
    const foundCar = catalog.find((car) => car.id === carId);
    setSelectedCar(foundCar);
  }, [carId]);

  const handleEditButtonClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteButtonClick = () => {
    const newArray = catalog.filter((item) => item.id !== selectedCar.id);
    const updatedCatalog = [...newArray];

    localStorage.setItem("catalog", JSON.stringify(updatedCatalog));
    updateCatalog(updatedCatalog);
    closeModal();
  };

  return (
    <div className="infoCar">
      <h4>Характеристики авто </h4>

      {selectedCar ? (
        <>
          <div className="edit">
            {getAuthor === selectedCar.author && (
              <button onClick={handleEditButtonClick}>Редагувати</button>
            )}
            {getAuthor === selectedCar.author && (
              <button onClick={handleDeleteButtonClick}>Видалити</button>
            )}
          </div>

          {isEditModalOpen && (
            <EditCarComponent updateCatalog={updateCatalog} id={carId} />
          )}

          <h2>{selectedCar.name}</h2>
          <p>Виробник: {selectedCar.brend}</p>
          <p>Рік випуску: {selectedCar.year}</p>
          <p>Об'єм двигуна: {selectedCar.volume}</p>
          <p>Ціна: {selectedCar.price}</p>
          <p>Колір: {selectedCar.color}</p>
          <div className="imgInfo">
            <img src={selectedCar.img} alt={selectedCar.name} />
          </div>

          <p>Опис: {selectedCar.desc}</p>
        </>
      ) : (
        <p>Авто з ID {carId} не знайдено</p>
      )}
    </div>
  );
};

export default InfoCarComponent;
