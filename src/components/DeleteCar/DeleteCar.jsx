// DeleteCarComponent.jsx
import React from "react";

const DeleteCarComponent = ({ handleConfirmDelete, setIsDeleteModalOpen }) => {
  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      <h1>Вы уверены, что хотите удалить автомобиль?</h1>
      <button onClick={handleConfirmDelete}>Да</button>
      <button onClick={handleCancelDelete}>Нет</button>
    </div>
  );
};

export default DeleteCarComponent;
