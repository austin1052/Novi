import { useState, useEffect } from 'react';
import Head from "next/head";
import ImageColumn from '../components/column'
import { fetchImages, findColumnWidth, createColumnGroups } from '../lib/utils';
import styles from "../styles/Gallery.module.css";

export default function Gallery({ images, width }) {
  const [columnGroups, setColumnGroups] = useState(undefined);

  //css for gap between rows and columns is set using this
  const imageGap = 16;
  const minImageWidth = 300;

  useEffect(() => {
    let columns = createColumnGroups(images, imageGap);
    setColumnGroups(columns)
  }, [images, width])

  return (
    <>
      <Head>
        <title>Novi - Art Gallery</title>
        <meta name="description" content="All of my cool images." />
      </Head>
      <div className={styles.group} style={{ marginRight: imageGap }}>
        {
          columnGroups && Object.keys(columnGroups).map((group, i) => {
            return (
              <ImageColumn key={i} group={columnGroups[group]} width={width} imageGap={imageGap} />
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