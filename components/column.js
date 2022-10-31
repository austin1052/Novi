import Image from "next/future/image";

import styles from "../styles/Gallery.module.css";

export default function ImageColumn({ group, columnWidth, imageGap }) {
  return (
    <div className={styles.column} style={{ marginRight: imageGap }}>
      {
        group && group.map((image, i) => {
          let { id, link, image: imageUrl, animationDelay } = image;
          return (
            <div key={id}>
              <a href={link} rel="noreferrer">
                <div className={styles.imageContainer} style={{ width: columnWidth + "px", marginBottom: imageGap, animationDelay: animationDelay + "ms" }}>
                  <Image
                    className={styles.image}
                    fill
                    object-fit="contain"
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw"
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