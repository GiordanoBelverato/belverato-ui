import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles['container']}>
      <h1>Welcome to Footer!</h1>
      <nav>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;