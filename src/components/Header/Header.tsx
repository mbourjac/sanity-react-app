import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  const getClassName = ({ isActive }: { isActive: boolean }) => {
    return `${styles.link} ${isActive ? styles.active : ''}`.trim();
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={getClassName}>
          Home
        </NavLink>
        <NavLink to="/projects" className={getClassName}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};
