import React from 'react';
import styles from '../components/app/App.module.css';

function Cars({ catalog, handleOrderClick }) {
  return (
    <div className={styles.cars}>
      {catalog.map((car, index) => (
        <div className={styles.car} key={index}>
          <h2>{car.name}</h2>
          <p>Виробник: {car.brend}</p>
          <p>Рік випуску: {car.year}</p>
          <p>Об'єм двигуна: {car.volume}</p>
          <p>Ціна: {car.price}</p>
          <p>Колір: {car.color}</p>
          {/* <p>Опис: {car.desc}</p> */}
          <div className={styles.imgContainer}>
          <img src={car.img} alt={`Car ${index}`} />
          </div>
          <button id={`orderButton_${car.id}`} onClick={() => handleOrderClick(car.id)}>
            Замовити
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

function FilteredCars({ catalog, handleOrderClick }) {
  // console.log(catalog);
  return (
    <div className={styles.cars}>
      {catalog.map((car, index) => (
        <div className={styles.car} key={index}>
          <h2>{car.name}</h2>
          <p>Виробник: {car.brend}</p>
          <p>Рік випуску: {car.year}</p>
          <p>Об'єм двигуна: {car.volume}</p>
          <p>Ціна: {car.price}</p>
          <p>Колір: {car.color}</p>
          {/* <p>Опис: {car.desc}</p> */}
          <div className={styles.imgContainer}>
          <img src={car.img} alt={`Car ${index}`} />
          </div>
          <button id={`orderButton_${car.id}`} onClick={() => handleOrderClick(car.id)}>
            Замовити
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export { Cars, FilteredCars };
