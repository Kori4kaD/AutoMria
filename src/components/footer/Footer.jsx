import styles from "./Footer.module.css";
import telegram from "../../share/images/telegram.png";
import viber from "../../share/images/viber.png";
import phone from "../../share/images/phone-call.png";
import logo from "../../share/images/auto.png";
export default function Footer() {
  return (
    <footer>
      <div className="container flex-column">
        <div className={styles.infoFooter}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
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
        <div className="avtor">
          <h2>Created by KoricaWeb</h2>
        </div>
      </div>
    </footer>
  );
}
