import { useState } from "react";
import Head from "next/head";
// import Image from 'next/image'
import styles from "../../styles/Products.module.css";

function handleOnSubmit(event) {
  event.preventDefault();
};

function createProduct() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Add New Painting</title>
        <meta name="description" content="add new product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Add New Painting</h1>

      <form className={styles.form} onSubmit={handleOnSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />

        <label htmlFor="description">Description</label>
        <textarea id="description"></textarea>

        <label htmlFor="available">Available for sale?</label>
        <select id="availble" name="select">
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>

        <label htmlFor="price">Price</label>
        <input id="price" type="text" />

        <input type="submit" name="submit" value="Add Painting"></input>
      </form>
    </div>
  );
};

export default createProduct;
