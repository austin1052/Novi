import Head from "next/head";
import Image from "next/image";

export default function UploadImage() {
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;

    if (fileInput && fileInput.files) {
      //set loading true
      for (const file of fileInput.files) {
        const formData = new FormData();
        formData.append("upload_preset", "my_uploads");
        formData.append("file", file);

        const data = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        ).then((r) => r.json());
        console.log("image data", data);
      }
      //set loading false
    }
  };

  // const handleOnChange = () => {};

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="file">Select image:</label>
      <input type="file" id="img" name="file" accept="image/*" multiple />
      <button>Upload Image</button>
    </form>
  );
};
