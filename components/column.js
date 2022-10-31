import { useState, useEffect } from 'react';
import Image from "next/future/image";
// import { findColumnWidth } from '../lib/utils';

import styles from "../styles/Gallery.module.css";

export default function ImageColumn({ group, columnWidth, imageGap }) {

  return (
    <div className={styles.column} style={{ marginRight: imageGap }}>
      {
        group && group.map((image, i) => {
          let { id, link, height, image: imageUrl, animationDelay } = image;
          console.log(image);
          // let delay = (i * 300) + "ms";
          return (
            <div key={id}>
              <a href={link} rel="noreferrer">
                <div className={styles.imageContainer} style={{ width: columnWidth + "px", marginBottom: imageGap, animationDelay: animationDelay + "ms" }}>
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