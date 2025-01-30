import React from 'react';
import styles from './navbar.module.css';

interface NavbarProps {
  title: string;
  links: { name: string; url: string }[];
}

export function Navbar({ title, links }: NavbarProps) {
  return (
    <div className={styles['container']}>
      <h1>{title}</h1>
      <nav>
        <ul className={styles['navList']}>
          {links.map((link, index) => (
            <li key={index} className={styles['navItem']}>
              <a href={link.url} className={styles['navLink']}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
