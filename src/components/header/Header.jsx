// import styles from './Header.module.css';

export default function Header({openModal}) {

  return (
    <header>
     <h1>header</h1>
     <button onClick={() => openModal()}>Додати автомобіль</button>
    </header>
  );
}
