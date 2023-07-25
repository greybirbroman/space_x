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
          <p>{item.text}</p>
          <span className={styles.span}>{item.span}</span>
          <p>{item.subtext}</p>
        </li>
      ))}
    </ul>
  );
};

export default HeadSectionSpanTable;