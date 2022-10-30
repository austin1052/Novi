async function fetchImages() {
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
    images = resources.map((resource) => {
      const { width, height } = resource;
      return {
        id: resource.asset_id,
        title: resource.public_id,
        image: resource.secure_url,
        width,
        height,
      };
    });
  }
  return images;
}

//margin set in globals.css under "main"
const pageMargins = 2 * 48

function findColumnWidth(imageGap) {
  const screenWidth = window.innerWidth - pageMargins;
  const minImageWidth = 300 + imageGap
  const columns = Math.floor(screenWidth / minImageWidth)
  const columnWidth = (screenWidth - ((columns - 1) * imageGap)) / columns
  return columnWidth;
}

function createColumnGroups(images, imageGap) {
  const screenWidth = window.innerWidth - pageMargins;
  const minImageWidth = 300 + imageGap
  const columns = Math.floor(screenWidth / minImageWidth)
  const columnGroups = {}
  for (let i = 0; i < columns; i++) {
    columnGroups[`group${i}`] = [];
  }
  for (let i = 0; i < images.length; i++) {
    let column = i % columns;
    if (columnGroups !== undefined) {
      columnGroups[`group${column}`].push(images[i]);
    }
  }
  return columnGroups;
}

export { fetchImages, findColumnWidth, createColumnGroups };
