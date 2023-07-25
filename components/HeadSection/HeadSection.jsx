'use client';
import styles from './HeadSection.module.css';
import Image from 'next/image';
import PageTitle from '../PageTitle/PageTitle';
import HeadSectionSpanTable from '../HeadSectionSpanTable/HeadSectionSpanTable';
import CustomButton from '../CustomButton/CustomButton';
import useIsMobileResolution from '@/utils/hooks/useIsMobileResolution';

const HeadSection = () => {
  const isMobileResolution = useIsMobileResolution(992);
  const sectionData = {
    title: 'путешествие',
    subtitle: 'на красную планету',
  };
  return (
    <section className={styles.section}>
         <Image
          src='/space.jpg'
          alt='Main Image, Space'
          fill={true}
          priority={true}
          quality={100}
          objectFit='cover'
          style={{ filter: 'contrast(1.1)' }}
        />
      {!isMobileResolution && (
        <Image
          src='/space-no-background.png'
          fill={true}
          objectFit='cover'
          style={{ zIndex: '30', filter: 'contrast(1)' }}
          alt='Mars Image, Space'
          quality={100}
        />
      )}
      <div className={styles.container}>
        <div>
          <PageTitle
            title={sectionData.title}
            subtitle={sectionData.subtitle}
          />
        </div>
        <div className={styles.buttonContainer}>
          <CustomButton
            title='Начать путешествие'
            areaLabel='Кнопка "Начать путешествие"'
          />
        </div>
        <HeadSectionSpanTable />
      </div>
    </section>
  );
};

export default HeadSection;
