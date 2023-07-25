'use client'
import styles from './Logo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useIsMobileResolution from '@/utils/hooks/useIsMobileResolution';

const Logo = () => {
  const isMobileResolution = useIsMobileResolution(767)
  return (
    <Link href='/' className={styles.logoLink}>
      <Image src='/spacex-logo.svg' alt='Logo' width={isMobileResolution? 160 : 332} height={40} quality={100} priority={true}/>
    </Link>
  );
};

export default Logo;
