// EditCarComponent.jsx

import React, { useState, useEffect } from "react";


const EditCarComponent = ({ updateCatalog, id }) => {

  const [selectedCar, setSelectedCar] = useState(null);

  const [formData, setFormData] = useState({
    author: "",
    name: "",
    brend: "",
    year: "",
    volume: "",
    price: "",
    color: "",
    desc: "",
    img: "",
  });
  useEffect(() => {
    // Предзаполнение данных формы из выбранного автомобиля
    if (selectedCar) {
      setFormData({
        author: selectedCar.author,
        name: selectedCar.name,
        brend: selectedCar.brend,
        year: selectedCar.year,
        volume: selectedCar.volume,
        price: selectedCar.price,
        color: selectedCar.color,
        desc: selectedCar.desc,
        img: selectedCar.img,
      });
    }
  }, [selectedCar]);
  const storedCatalogData = localStorage.getItem("catalog");
  const parsedCatalog = JSON.parse(storedCatalogData);

  // Модифікуємо каталог, якщо потрібно
  const catalog = parsedCatalog.map((car) => ({
    ...car,
    price: parseInt(car.price, 10),
  }));
  useEffect(() => {
    // Отримуємо дані з localStorage
   

    const foundCar = catalog.find((car) => car.id === id);
    setSelectedCar(foundCar);
  }, [id]);
  const newArray = catalog.filter(item => item.id !== id);

  const editCarToCatalog = () => {
    // Додайте новий об'єкт до поточного масиву
    const uniqueId = Date.now();
    const author = selectedCar.author;
    const updatedCatalog = [
      ...newArray,
      { id: uniqueId, author: author, ...formData },
    ];
    // Оновіть локальне сховище з оновленим масивом
    localStorage.setItem("catalog", JSON.stringify(updatedCatalog));
    // setCarAdded(true);
    updateCatalog(updatedCatalog);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="editForm">
      <h1>Edit {id}</h1>

      <form>
        <label>
          Назва автомобілю:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Бренд:
          <input
            type="text"
            name="brend"
            value={formData.brend}
            onChange={handleChange}
          />
        </label>
        <label>
          Рік випуску:
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </label>
        <label>
          Обєм двигуна:
          <input
            type="text"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
          />
        </label>
        <label>
          Ціна:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Колір:
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </label>
        <label>
          Опис:
          <textarea
            type="text"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />
        </label>
        <label>
          Посилання на зображення:
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={() => editCarToCatalog()}>
          Додати
        </button>
      </form>
    </div>
  );
};
export default EditCarComponent;
