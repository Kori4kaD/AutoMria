// import React, { useState, useEffect } from 'react';
// import styles from './App.module.css';
// import Header from '../header/Header';
// import Footer from '../footer/Footer';
// import Catalog from '../../share/catalog';
// import { Cars, FilteredCars } from '../../share/Cars';
// import Modal from '../modal/Modal';

// function App() {
//   const [filteredColor, setFilteredColor] = useState('All');
//   const [filteredBrand, setFilteredBrand] = useState('All');
//   const [filteredYear, setFilteredYear] = useState('All');
//   const [filteredVolume, setFilteredVolume] = useState('All');
//   const [filteredPrice, setFilteredPrice] = useState('All');
//   const [filteredCatalog, setFilteredCatalog] = useState(Catalog);
//   const [showFilteredCars, setShowFilteredCars] = useState(false);
//   const [isModalOpen, setModal] = useState(false);
//   const [catalog, setCatalog] = useState(Catalog);

//   const addCarToCatalog = (newCar) => {
   
//     const uniqueId = Date.now();
//     // Создаем новый массив с добавленным новым автомобилем
//        console.log(newCar);
//     setCatalog([...catalog, { ...newCar, id: uniqueId}]);
    
//   };
//   console.log(catalog); 
//   useEffect(() => {
//     applyFilters(); // Застосувати фільтри після змін у каталозі

//     if (showFilteredCars) {
//       setFilteredCatalog(catalog); // Оновити відфільтрований каталог
//     }
//   }, [catalog, showFilteredCars, filteredColor, filteredBrand, filteredYear, filteredVolume, filteredPrice]);

//   function handleOrderClick(id) {
//     console.log(id);
//   }


  


//   const colorOptions = ['All', 'Green', 'Black', 'White', 'Red', 'Yellow'];
//   const brandOptions = ['All', 'Suzuki', 'Toyota', 'Mitsubishi', 'Nissan', 'DODGE', 'JEEP'];
//   const yearOptions = ['All', '2020', '2021', '2022', '2023'];
//   const volumeOptions = ['All', '2', '3', '4'];
//   const priceOptions = ['All', '12000', '13000', '14000', '15000', '16000', '17000', '18000'];

//   const applyFilters = () => {
//     let result = Catalog;
  
//     if (filteredColor !== 'All') {
//       result = result.filter((car) => car.color.toLowerCase() === filteredColor.toLowerCase());
//     }
  
//     if (filteredBrand !== 'All') {
//       result = result.filter((car) => car.brend.toLowerCase() === filteredBrand.toLowerCase());
//     }
  
//     if (filteredYear !== 'All') {
//       result = result.filter((car) => car.year === filteredYear);
//     }
  
//     if (filteredVolume !== 'All') {
//       result = result.filter((car) => car.volume === filteredVolume);
//     }
  
//     if (filteredPrice.min !== 'All' && filteredPrice.max !== 'All') {
//       const minPrice = parseInt(filteredPrice.min, 10);
//       const maxPrice = parseInt(filteredPrice.max, 10);
  
//       if (minPrice > maxPrice) {
//         // Выводим сообщение об ошибке
//         alert('Некорректно выбран ценовой диапазон');
//         return;
//       }
  
//       result = result.filter(
//         (car) => car.price >= minPrice && car.price <= maxPrice
//       );
//     }
  
//     setFilteredCatalog(result);
//   };

//   const handleShowFilteredCars = () => {
//     setShowFilteredCars(true);
//   };

//   const handleResetFilters = () => {
//     setFilteredColor('All');
//     setFilteredBrand('All');
//     setFilteredYear('All');
//     setFilteredVolume('All');
//     setFilteredPrice('All');
//     setFilteredCatalog(Catalog);
//     setShowFilteredCars(false);
//   };
//   const openModal = () => {
//     setModal((prev) => !prev);
 
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }
//   }, [isModalOpen]);

//   return (
//     <div className={styles.App}>
//       <Header
//        openModal={openModal}
//       />
//       <main className={styles.content}>
//         <div className='container'>
//           <h1>Автомобілі в наявності</h1>
//           <div className='filter'>
//             <label>
//               Фільтр за кольором:
//               <select value={filteredColor} onChange={(e) => setFilteredColor(e.target.value)}>
//                 {colorOptions.map((color, index) => (
//                   <option key={index} value={color.toLowerCase()}>
//                     {color}
//                   </option>
//                 ))}
//               </select>
//             </label>
//             <label>
//               Фільтр за брендом:
//               <select value={filteredBrand} onChange={(e) => setFilteredBrand(e.target.value)}>
//                 {brandOptions.map((brand, index) => (
//                   <option key={index} value={brand.toLowerCase()}>
//                     {brand}
//                   </option>
//                 ))}
//               </select>
//             </label>
//             <label>
//               Фільтр за роком випуску:
//               <select value={filteredYear} onChange={(e) => setFilteredYear(e.target.value)}>
//                 {yearOptions.map((year, index) => (
//                   <option key={index} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>
//             </label>
//             <label>
//               Фільтр за об'ємом двигуна:
//               <select value={filteredVolume} onChange={(e) => setFilteredVolume(e.target.value)}>
//                 {volumeOptions.map((volume, index) => (
//                   <option key={index} value={volume}>
//                     {volume}
//                   </option>
//                 ))}
//               </select>
//             </label>
//             <label>
//   Фільтр за ціною (мін):
//   <select value={filteredPrice.min} onChange={(e) => setFilteredPrice({ ...filteredPrice, min: e.target.value })}>
//     {priceOptions.map((price, index) => (
//       <option key={index} value={price}>
//         {price}
//       </option>
//     ))}
//   </select>
// </label>
// <label>
//   Фільтр за ціною (макс):
//   <select value={filteredPrice.max} onChange={(e) => setFilteredPrice({ ...filteredPrice, max: e.target.value })}>
//     {priceOptions.map((price, index) => (
//       <option key={index} value={price}>
//         {price}
//       </option>
//     ))}
//   </select>
// </label>
//           </div>
//           <button onClick={handleShowFilteredCars}>Отобразить</button>
//           <button onClick={handleResetFilters}>Сбросить фильтр</button>
//           {showFilteredCars ? (
//             <FilteredCars catalog={filteredCatalog} handleOrderClick={handleOrderClick} />
//           ) : (
//             <Cars catalog={Catalog} handleOrderClick={handleOrderClick} />
//           )}
//         </div>
//       </main>
//       <Footer />
//       <Modal
//         isModalOpen={isModalOpen}
//         openModal={openModal}
//         addCarToCatalog={addCarToCatalog}
//       >
//       </Modal>
//     </div>
//   );
// }

// export default App;
