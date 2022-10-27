import Head from "next/head";
import Image from "next/future/image";
import styles from "../styles/Gallery.module.css";

const Gallery = ({ images }) => {
  // console.log("images", images);
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="All of my cool images." />
      </Head>

      <h1>Gallery</h1>

      <ul className={styles.ul}>
        <div className={styles.grid}>
          {images.map((image) => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.image}
                      width="0"
                      height="0"
                      sizes="100vw"
                      src={image.image}
                      alt=""
                    />
                  </div>
                </a>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

// move fetch to lib

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_CLOUD_KEY + ":" + process.env.CLOUD_SECRET_KEY
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());

  if (results !== undefined) {
    const { resources } = results;
    const images = resources.map((resource) => {
      const { width, height } = resource;
      return {
        id: resource.asset_id,
        title: resource.public_id,
        image: resource.secure_url,
        width,
        height,
      };
    });
    return {
      props: { images },
    };
  }
}

export default Gallery;

// get images from gallery folder
// display on page
// ideally no pagination, just show all images (~20)
// click on image to go to painting information page
// only paintings marked as available will have an add to cart button
