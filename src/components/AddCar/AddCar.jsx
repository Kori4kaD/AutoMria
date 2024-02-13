
import React, { useState } from "react";

const AddCarComponent = ({ updateCatalog }) => {
  const [isCarAdded, setCarAdded] = useState(false);
 
  const [formData, setFormData] = useState({
    author:"",
    name: "",
    brend: "",
    year: "",
    volume: "",
    price: "",
    color: "",
    desc: "",
    img: "",
  });
  const addCarToCatalog = () => {
    const storedCatalogData = localStorage.getItem("catalog");
    const parsedCatalog = JSON.parse(storedCatalogData) || [];

    // Додаю  новий об'єкт до поточного масиву
    const uniqueId = Date.now();

    const updatedCatalog = [...parsedCatalog, { id: uniqueId , ...formData}];

    // Оновлюю локальне сховище з оновленим масивом
    localStorage.setItem("catalog", JSON.stringify(updatedCatalog));
    localStorage.setItem("token", JSON.stringify(formData.author));
    setCarAdded(true);
    updateCatalog(updatedCatalog);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h2>Додати авто на продаж</h2>

      <form>
        <label>
          Ваше імя:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            
          />
        </label>
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
        <button type="submit" onClick={() => addCarToCatalog()}>
          Додати
        </button>
      </form>
      <div className={`message ${isCarAdded ? "show" : "hide"}`}>
        <h5>ваш автомобіль додано</h5>
      </div>
    </div>
  );
};

export default AddCarComponent;
