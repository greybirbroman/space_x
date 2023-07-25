'use client';
import styles from './HeadSectionSpanTable.module.css';
import { useState } from 'react';
import { tableList } from '@/utils/constants';
import { hoveredItemStyles, defaultItemStyles } from '@/styles';

const HeadSectionSpanTable = () => {
  const [hoveredStyles, setHoveredStyles] = useState(defaultItemStyles);

  const handleMouseEnter = (itemId) => {
    const stylesForItem = hoveredItemStyles.find((style) => style.id === itemId);
    if (stylesForItem) {
      setHoveredStyles((prevStyles) =>
      prevStyles.filter((style) => style.id !== itemId).concat(stylesForItem)
      );
    }
  };

  const handleMouseLeave = () => {
    setHoveredStyles(defaultItemStyles);
  };

  const getItemStyles = (itemId) => {
    return hoveredStyles.find((style) => style.id === itemId) || [];
  };

  // Лучше переписать с использованием доп.классов для каждого элемента
  // чтобы избежать поведения touch с помощью медиа запроса типа hover:hover
  return (
    <ul className={styles.tableList}>
      {tableList.map((item) => (
        <li
          key={item.id}
          className={styles.tableItem}
          style={getItemStyles(item.id)}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <p className={styles.text}>{item.text}</p>
          <span className={styles.span}>{item.span}</span>
          <p className={styles.text}>{item.subtext}</p>
        </li>
      ))}
    </ul>
  );
};

export default HeadSectionSpanTable;
