import classes from "./Products.module.css";
import ProductItem from "./ProductItem/ProductItem";

import { breadList } from "../../data/data";

const Products = () => {
  return (
    <>
      <section className={classes.products}>
        <h2 className={classes.categoryName}>Bread</h2>
        <ul>
          <ProductItem productList={breadList} />
        </ul>
      </section>
    </>
  );
};

export default Products;
