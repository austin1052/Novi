import { useState, useEffect } from 'react';
import Image from "next/future/image";
import { findColumnWidth } from '../lib/utils';

import styles from "../styles/Gallery.module.css";

export default function ImageColumn({ group, width, imageGap }) {
  const [columnWidth, setColumnWidth] = useState(300);

  useEffect(() => {
    setColumnWidth(findColumnWidth(imageGap));
  }, [width, imageGap])

  return (
    <div className={styles.column} style={{ marginRight: imageGap }}>
      {
        group && group.map((image) => {
          let { id, link, height, image: imageUrl } = image;
          return (
            <div key={id}>
              <a href={link} rel="noreferrer">
                <div className={styles.imageContainer} style={{ width: columnWidth + "px" }}>
                  <Image
                    className={styles.image}
                    fill
                    object-fit="contain"
                    src={imageUrl}
                    alt=""
                  />
                </div>
              </a>
            </div>
          )
        })
      }
    </ div >
  )
}