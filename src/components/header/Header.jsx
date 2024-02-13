import styles from "./Header.module.css";
import logo3 from "../../share/images/autoMriya.png";
import telegram from "../../share/images/telegram.png";
import viber from "../../share/images/viber.png";
import phone from "../../share/images/phone-call.png";
import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Уменьшаем размер лого при загрузке страницы
    const logo = document.querySelector(`.${styles.logo}`);
    logo.classList.add(`${styles.shrink}`);
  }, []);
  return (
    <header>
      <div className={`container ${styles.headerWrap}`}>
        <div className={styles.lineOne}>
          <div>
            <img className={styles.logo} src={logo3} alt="logo" />
          </div>

          <div className={styles.contacts}>
          <a href="tel:+1234567890" className={styles.contact}>
              <img src={phone} alt="phone" />
              </a>
          
            <a href="https://telegram.org" className={styles.contact}>
              <img src={telegram} alt="telegram" />
          </a>
          <a href="https://viber.com" className={styles.contact}>
              <img src={viber} alt="viber" />
            </a>
          </div>
        </div>
        <div className={styles.lineTwo}></div>
      </div>
    </header>
  );
}
