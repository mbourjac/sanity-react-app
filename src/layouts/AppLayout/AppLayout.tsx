import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Metadata } from '../../components/Metadata/Metadata';

type AppLayoutProps = {
  children?: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Metadata />
      <Header />
      <main className={styles.main}>{children ?? <Outlet />}</main>
      <Footer />
    </>
  );
};
