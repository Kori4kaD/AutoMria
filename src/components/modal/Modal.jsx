import React, { useState } from 'react';
import styles from "./Modal.module.css";

export default function Modal({
  isModalOpen,
  openModal,
  modalPosition,
  children
 
}) {
  return (
    <div
      className={`${styles.modalWrap} ${isModalOpen && styles.open} ${
        modalPosition && styles[modalPosition]
      }`}
      onClick={() => openModal()}>
      <div className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
        <div>
        {children}
         
        </div>
      </div>
    </div>
  );
}
