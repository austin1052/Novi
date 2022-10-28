import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/future/image";
import Column from '../components/column'
import { fetchImages, findColumnWidth, createColumnGroups } from '../lib/fetchImages';
import styles from "../styles/Gallery.module.css";

export default function Gallery({ images, width }) {
  const [columnGroups, setColumnGroups] = useState(undefined);

  //css for gap between rows and columns is set using this
  const imageGap = 16;

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
      <div className={styles.group} style={{ gap: imageGap }}>
        {
          columnGroups && Object.keys(columnGroups).map((group) => {
            console.log(columnGroups[group])
            return (
              <Column key={group.image} group={columnGroups[group]} width={width} imageGap={imageGap} />
            )
          })
        }
      </div>
    </>
  )
};

export async function getStaticProps() {
  const images = await fetchImages();
  // const newImages = createColumns(images);
  // console.log(newImages);
  return {
    props: { images },
  };
}