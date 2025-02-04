import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles['container']}>
      <h1>Welcome to Header!</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;