import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ArrCatalog from "../../share/catalog";
import { Cars, FilteredCars } from "../../share/Cars";
import Modal from "../modal/Modal";
import AddCarComponent from "../AddCar/AddCar";
import InfoCarComponent from "../InfoCar/InfoCar";

function App() {
  if (!localStorage.getItem("catalog")) {
    const catalogData = JSON.stringify(ArrCatalog);
    localStorage.setItem("catalog", catalogData);
  }
 

  const [сatalog, setCatalog] = useState([]);
  const [filteredColor, setFilteredColor] = useState("All");
  const [filteredBrand, setFilteredBrand] = useState("All");
  const [filteredYear, setFilteredYear] = useState("All");
  const [filteredVolume, setFilteredVolume] = useState("All");
  const [filteredPrice, setFilteredPrice] = useState("All");
  const [filteredCatalog, setFilteredCatalog] = useState(сatalog);
  const [showFilteredCars, setShowFilteredCars] = useState(false);
  const [isModalOpen, setModal] = useState(false);
  const [modalContent, setModalContent] = useState('contact');
  const [carId, setCarId] = useState(null);

  useEffect(() => {
    const storedCatalogData = localStorage.getItem("catalog");
    const parsedCatalog = JSON.parse(storedCatalogData) || [];
    setCatalog(parsedCatalog);
  }, []);

  // Функція для оновлення масиву в головному компоненті
  const updateCatalog = (updatedCatalog) => {
    setCatalog(updatedCatalog);
  };
  const openModal = (content = 'contact', carId = null) => {
    setModal((prev) => !prev);
    setModalContent(content);
    setCarId(carId);
  };

  useEffect(() => {
    if (showFilteredCars) {
      applyFilters();
    }
  }, [
    filteredColor,
    filteredBrand,
    filteredYear,
    filteredVolume,
    filteredPrice,
    showFilteredCars,
  ]);

 

  const colorOptions = ["All", "Green", "Black", "White", "Red", "Yellow", "Blue"];
  const brandOptions = [
    "All",
    "Suzuki",
    "Toyota",
    "Mitsubishi",
    "Nissan",
    "DODGE",
    "JEEP",
  ];
  const yearOptions = ["All", "2020", "2021", "2022", "2023"];
  const volumeOptions = ["All", "2", "3", "4"];
  const priceOptions = [
    "All",
    "12000",
    "13000",
    "14000",
    "15000",
    "16000",
    "17000",
    "18000",
  ];

  const applyFilters = () => {
    let result = [... сatalog];

   
    if (filteredColor !== "All") {
      result = result.filter(
        (car) => car.color.toLowerCase() === filteredColor.toLowerCase()
      );
    }

    if (filteredBrand !== "All") {
      result = result.filter(
        (car) => car.brend.toLowerCase() === filteredBrand.toLowerCase()
      );
    }

    if (filteredYear !== "All") {
      result = result.filter((car) => car.year === filteredYear);
    }

    if (filteredVolume !== "All") {
      result = result.filter((car) => car.volume === filteredVolume);
    }

    if (filteredPrice.min !== undefined && filteredPrice.max !== undefined) {
      const minPrice = parseInt(filteredPrice.min, 10);
      const maxPrice = parseInt(filteredPrice.max, 10);
      if (minPrice >= maxPrice) {
        return console.log("некоректно вибрана ціна");
      }

      
      result = result.filter((car) => {
        const carPrice = parseInt(car.price, 10);
        return !isNaN(carPrice) && carPrice >= minPrice && carPrice <= maxPrice;
      });
    }
    if (filteredPrice.min === undefined && filteredPrice.max !== undefined) {
      
      const minPrice = parseInt(priceOptions[1], 10);
      
      const maxPrice = parseInt(filteredPrice.max, 10);
      result = result.filter((car) => {
        const carPrice = parseInt(car.price, 10);
        return !isNaN(carPrice) && carPrice >= minPrice && carPrice <= maxPrice;
      });
    }
    if (filteredPrice.min !== undefined && filteredPrice.max === undefined) {
      const minPrice = parseInt(filteredPrice.min, 10);

      const maxPrice = parseInt(priceOptions[priceOptions.length - 1], 10);
      result = result.filter((car) => {
        const carPrice = parseInt(car.price, 10);
        return !isNaN(carPrice) && carPrice >= minPrice && carPrice <= maxPrice;
      });
    }

    setFilteredCatalog(result);
  };

  const handleShowFilteredCars = () => {
    setShowFilteredCars(true);
  };

  const handleResetFilters = () => {
    setFilteredColor("All");
    setFilteredBrand("All");
    setFilteredYear("All");
    setFilteredVolume("All");
    setFilteredPrice("All");
    setFilteredCatalog(сatalog);
    setShowFilteredCars(false);
  };

  return (
    <div className={styles.App}>
      <Header openModal={openModal}/>
      <main className={styles.content}>
        <div className="container">
          <div className={styles.filterWrap}>
          <div className={styles.filter}>
            <label>
              Фільтр за кольором:
              <select
                value={filteredColor}
                onChange={(e) => setFilteredColor(e.target.value)}>
                {colorOptions.map((color, index) => (
                  <option key={index} value={color.toLowerCase()}>
                    {color}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Фільтр за брендом:
              <select
                value={filteredBrand}
                onChange={(e) => setFilteredBrand(e.target.value)}>
                {brandOptions.map((brand, index) => (
                  <option key={index} value={brand.toLowerCase()}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Фільтр за роком випуску:
              <select
                value={filteredYear}
                onChange={(e) => setFilteredYear(e.target.value)}>
                {yearOptions.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Фільтр за об'ємом двигуна:
              <select
                value={filteredVolume}
                onChange={(e) => setFilteredVolume(e.target.value)}>
                {volumeOptions.map((volume, index) => (
                  <option key={index} value={volume}>
                    {volume}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Фільтр за ціною (мін):
              <select
                value={filteredPrice.min}
                onChange={(e) =>
                  setFilteredPrice({ ...filteredPrice, min: e.target.value })
                }>
                {priceOptions.map((price, index) => (
                  <option key={index} value={price}>
                    {price}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Фільтр за ціною (макс):
              <select
                value={filteredPrice.max}
                onChange={(e) =>
                  setFilteredPrice({ ...filteredPrice, max: e.target.value })
                }>
                {priceOptions.map((price, index) => (
                  <option key={index} value={price}>
                    {price}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles.filterBtn}>
          <button onClick={handleShowFilteredCars}>Отобразить</button>
          <button onClick={handleResetFilters}>Сбросить фильтр</button>
          </div>
          </div>
         
          <h1>Автомобілі в наявності</h1>
          {showFilteredCars ? (
            <FilteredCars
            сatalog={filteredCatalog}
              openModal={openModal}
            />
          ) : (
            <Cars сatalog={сatalog} openModal={openModal} />
          )}
        </div>
      </main>
      <Footer />
      <Modal
  isModalOpen={isModalOpen}
  openModal={openModal}
  modalPosition={modalContent !== 'contact' && 'right'}
>
  {modalContent === 'addCar' ? (
    <AddCarComponent updateCatalog={updateCatalog} />
  ) : modalContent === 'info' ? (
    <InfoCarComponent carId={carId} />
  ) : (
    <h2>Інша інформація</h2>
  )}
</Modal>
    </div>
  );
}

export default App;
