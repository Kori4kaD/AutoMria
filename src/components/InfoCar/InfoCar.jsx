// InfoCarComponent.jsx
import React, { useEffect, useState } from "react";
import EditCarComponent from "../EditCar/EditCar";
import DeleteCarComponent from "../DeleteCar/DeleteCar";

const InfoCarComponent = ({ carId, updateCatalog,  closeModal }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    const newArray = catalog.filter((item) => item.id !== selectedCar.id);
    const updatedCatalog = [...newArray];

    localStorage.setItem("catalog", JSON.stringify(updatedCatalog));
    updateCatalog(updatedCatalog);
    setIsDeleteModalOpen(false);
    closeModal();
  };

  return (
    <div className="infoCar">
      <h4>Характеристики авто {carId}</h4>

      {selectedCar ? (
        <>
          <p>Опис: {selectedCar.author}</p>
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
          {getAuthor === selectedCar.author && (
            <button onClick={handleEditButtonClick}>Редагувати</button>
          )}
          {getAuthor === selectedCar.author && (
            <button onClick={handleDeleteButtonClick}>Видалити</button>
          )}

          {isEditModalOpen && (
            <EditCarComponent updateCatalog={updateCatalog} id={carId} />
          )}
         {isDeleteModalOpen && (
  <DeleteCarComponent
    handleConfirmDelete={() => {
      handleConfirmDelete();
      setIsDeleteModalOpen(false); // Закрываем модальное окно после подтверждения удаления
    }}
    setIsDeleteModalOpen={setIsDeleteModalOpen}
    updateCatalog={updateCatalog}
  />
)}

        </>
      ) : (
        <p>Авто з ID {carId} не знайдено</p>
      )}
    </div>
  );
};

export default InfoCarComponent;
