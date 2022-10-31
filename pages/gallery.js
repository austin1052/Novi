import { useState, useEffect } from 'react';
import Head from "next/head";
import ImageColumn from '../components/column'
import { fetchImages, createColumnGroups } from '../lib/utils';
import styles from "../styles/Gallery.module.css";

export default function Gallery({ images, width, isMobile }) {
  const [columnGroups, setColumnGroups] = useState(undefined);
  const [columnWidth, setColumnWidth] = useState(300);

  //css for gap between rows and columns is set using this
  const imageGap = isMobile ? 8 : 12;
  const minImageWidth = 300;

  useEffect(() => {
    let { columnGroups, columnWidth } = createColumnGroups(images, imageGap, isMobile);
    setColumnGroups(columnGroups)
    setColumnWidth(columnWidth)
  }, [images, width, imageGap, isMobile])

  return (
    <>
      <Head>
        <title>Novi - Art Gallery</title>
        <meta name="description" content="All of my cool images." />
        <meta name="theme-color" content="#696B22" />
      </Head>
      <div className={styles.group} style={{ marginRight: imageGap }}>
        {
          columnGroups && Object.keys(columnGroups).map((group, i) => {
            return (
              <ImageColumn key={i} group={columnGroups[group]} imageGap={imageGap} columnWidth={columnWidth} />
            )
          })
        }
      </div>
    </>
  )
};

export async function getServerSideProps() {
  const images = await fetchImages();
  return {
    props: { images },
  };
}