async function fetchImages() {
  try {
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

    let images;

    if (results !== undefined) {
      const { resources } = results;
      images = resources.map((resource, i) => {
        const delay = i * 200;
        const { width, height } = resource;
        return {
          id: resource.asset_id,
          title: resource.public_id,
          image: resource.secure_url,
          width,
          height,
          animationDelay: delay
        };
      });
    }
    return images;
  } catch (error) {
    console.log(error);
  }
}

//margin set in globals.css under "main"
const pageMarginsDesktop = 2 * 48
const pageMarginsMobile = 2 * 8

function createColumnGroups(images, imageGap, isMobile) {

  let screenWidth, minImageWidth;

  if (isMobile) {
    screenWidth = window.innerWidth - pageMarginsMobile;
    minImageWidth = (screenWidth / 2);
  } else {
    screenWidth = window.innerWidth - pageMarginsDesktop;
    minImageWidth = 300 + imageGap;
  }
  const columns = Math.floor(screenWidth / minImageWidth)
  console.log(columns);
  const columnGroups = {}
  const columnWidth = (screenWidth - ((columns - 1) * imageGap)) / columns

  for (let i = 0; i < columns; i++) {
    columnGroups[`group${i}`] = [];
  }

  for (let i = 0; i < images.length; i++) {
    let column = i % columns;
    if (columnGroups !== undefined) {
      columnGroups[`group${column}`].push(images[i]);
    }
  }

  return { columnGroups, columnWidth };
}

export { fetchImages, createColumnGroups };
