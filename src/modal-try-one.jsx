// import React, { useState } from 'react';
// import styles from "./Modal.module.css";

// export default function Modal({
//   isModalOpen,
//   openModal,
//   modalPosition,
//   addCarToCatalog, // Добавляем функцию для добавления нового автомобиля в каталог
// }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     brend: '',
//     year: '',
//     volume: '',
//     price: '',
//     color: '',
//     desc: '',
//     img: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     const addCar={author:'Daria',name: 'JEEP® AVENGER', brend:'JEEP', year:'2022', volume:'2', price:'16000', color:'yellow', desc:'Jeep® презентує свій абсолютно новий Avenger.', img:'https://jeep.ua/media/range/avenger/2023-Avenger-Exterior-front-left-34-Desktop.jpg'};
//     // Вызываем функцию для добавления нового автомобиля в каталог
//     console.log(formData)
//     addCarToCatalog(formData);

//     // Закрываем модальное окно
//     openModal();
//   };

//   return (
//     <div
//       className={`${styles.modalWrap} ${isModalOpen && styles.open} ${
//         modalPosition && styles[modalPosition]
//       }`}
//       onClick={() => openModal()}>
//       <div className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
//         <div>
//           <h1>Добавить новый автомобиль</h1>
//           <form>
//           <label>
//               Ваше імя:
//               <input type="text" name="author" value={formData.author} onChange={handleChange} />
//             </label>
//             <label>
//               Назва автомобілю:
//               <input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </label>
//             <label>
//               Бренд:
//               <input type="text" name="brend" value={formData.brend} onChange={handleChange} />
//             </label>
//             <label>
//               Рік випуску:
//               <input type="text" name="year" value={formData.year} onChange={handleChange} />
//             </label>
//             <label>
//             <label>
//               Обєм двигуна:
//               <input type="text" name="volume" value={formData.volume} onChange={handleChange} />
//             </label>
//               Ціна:
//               <input type="text" name="price" value={formData.price} onChange={handleChange} />
//             </label>
//             <label>
//               Колір:
//               <input type="text" name="color" value={formData.color} onChange={handleChange} />
//             </label>
//             <label>
//               Опис:
//               <textarea type="text" name="desc" value={formData.desc} onChange={handleChange} />
//             </label>
//             <label>
//               Обєм двигуна:
//               <input type="text" name="img" value={formData.img} onChange={handleChange} />
//             </label>

//             <button type="button" onClick={handleSubmit}>
//               Добавить
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
