'use client';
import styles from './Navigation.module.css';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/utils/constants';
import useIsMobileResolution from '@/utils/hooks/useIsMobileResolution';

const NavList = ({ className, onClick }) => {
  return (
    <ul className={className}>
      {navLinks.map((item) => (
        <li key={item.id} className={styles.navItem}>
          <Link href={item.link} onClick={onClick}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navigation = () => {
  const isBurgerResolution = useIsMobileResolution(1280);
  const isMobileResolution = useIsMobileResolution(767);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleBurgerMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  return (
    <nav ref={menuRef}>
      {isBurgerResolution ? (
        <>
          <Image
            src='/burger-menu_white.svg'
            alt='Menu-Burger, Menu icon'
            width={isMobileResolution ? 20 : 40}
            height={isMobileResolution ? 20 : 40}
            onClick={toggleBurgerMenu}
            className={styles.burgerImage}
          />
          {isMenuVisible && (
            <NavList
              className={styles.burgerMenuList}
              onClick={toggleBurgerMenu}
            />
          )}
        </>
      ) : (
        <NavList className={styles.navList} />
      )}
    </nav>
  );
};

export default Navigation;
