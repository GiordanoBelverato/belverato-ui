import React from 'react';
import styles from './hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className={styles['container']} style={heroStyle}>
      <h1 className={styles['title']}>{title}</h1>
      <p className={styles['subtitle']}>{subtitle}</p>
    </div>
  );
}

export default Hero;
