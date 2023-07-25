import styles from './page.module.css';
import Header from '@/components/Header/Header';
import HeadSection from '@/components/HeadSection/HeadSection';

export default function Home() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <Header />
        <HeadSection />
      </div>
    </>
  );
}
