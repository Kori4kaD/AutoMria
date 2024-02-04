// AddCarComponent.jsx

import React, { useState } from 'react';

const AddCarComponent = ({ updateCatalog }) => {
    const [isCarAdded, setCarAdded] = useState(false);
    const handleAddCar = () => {
        const storedCatalogData = localStorage.getItem("catalog");
        const parsedCatalog = JSON.parse(storedCatalogData) || [];
        
        // Додайте новий об'єкт до поточного масиву
        const newCar = {id:555, author:'korica',  name: 'BMW', brend:'BMW', year:'2020', volume:'2', price:'16000', color:'green', desc:'Тачка', img:'https://cdn.driver.top/images/cars/8a4ed379ccb02eb74179c3ded4952d77.webp'};
        const updatedCatalog = [...parsedCatalog, newCar];
        
        // Оновіть локальне сховище з оновленим масивом
        localStorage.setItem("catalog", JSON.stringify(updatedCatalog));
        setCarAdded(true);
        updateCatalog(updatedCatalog);
      };
  return (
    <div>
      {/* Ваш код компонента для "Додати автомобіль" */}
      <h2>Додати автомобіль Працює</h2>
      <button onClick={() =>  handleAddCar()}>Додати</button>
      <div className={`message ${isCarAdded ? 'show' : 'hide'}`}><h5>ваш автомобіль додано</h5></div>
      {/* Додайте інші елементи, які вам потрібні */}
    </div>
  );
};

export default AddCarComponent;
