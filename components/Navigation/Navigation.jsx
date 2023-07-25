'use client';
import styles from './Navigation.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/utils/constants';
import useIsMobileResolution from '@/utils/hooks/useIsMobileResolution';

const NavList = ({ className }) => {
    return (
        <ul className={className}>
            {navLinks.map((item) => (
                <li key={item.id} className={styles.navItem}>
                    <Link href={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    )
}

const Navigation = () => {
  const isBurgerResolution = useIsMobileResolution(1280);
  const isMobileResolution = useIsMobileResolution(767)
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setIsMenuVisible((prevState) => !prevState)
  }

  return (
    <nav>
      {isBurgerResolution ? (
          <>
          <Image
            src='/burger-menu_white.svg'
            alt='Menu-Burger, Menu icon'
            style={{cursor: 'pointer'}}
            width={isMobileResolution ? 20 : 40}
            height={isMobileResolution ? 20 : 40}
            onClick={toggleBurgerMenu}
          />
          {isMenuVisible && <NavList className={styles.burgerMenuList}/>}
        </>
      ) : (
       <NavList className={styles.navList}/>
      )}
    </nav>
  );
};

export default Navigation;
