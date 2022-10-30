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
    <div className={styles.column} style={{ gap: imageGap }} >
      {
        group && group.map((image) => {
          return (
            <div key={image.id}>
              <a href={image.link} rel="noreferrer">
                <div className={styles.imageContainer} style={{ width: columnWidth + "px" }}>
                  <Image
                    className={styles.image}
                    fill
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw"
                    src={image.image}
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