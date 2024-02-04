import React from 'react';
import styles from '../components/app/App.module.css';

function Cars({сatalog, openModal }) {
  return (
    <div className={styles.cars}>
      {сatalog.map((car, index) => (
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
          <button id={`orderButton_${car.id}`} onClick={() => openModal('info', car.id)} >
            Інфо
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

function FilteredCars({ сatalog, openModal }) {
  
  return (
    <div className={styles.cars}>
      {сatalog.map((car, index) => (
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
          <button id={`orderButton_${car.id}`} onClick={() => openModal(car.id)} >
            Замовити
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export { Cars, FilteredCars };
