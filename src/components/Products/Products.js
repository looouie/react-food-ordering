import classes from "./Products.module.css";
import ProductItem from "./ProductItem/ProductItem";

import { breadList, fikaList, cakeList } from "../../data/data";

const Products = () => {
  return (
    <>
      <section className={classes.products}>
        <h2 className={classes.categoryName}>Bread</h2>
        <ul>
          <ProductItem productList={breadList} />
        </ul>
      </section>
      <section className={classes.products}>
        <h2 className={classes.categoryName}>Fika</h2>
        <ul>
          <ProductItem productList={fikaList} />
        </ul>
      </section>
      <section className={classes.products}>
        <h2 className={classes.categoryName}>Fika</h2>
        <ul>
          <ProductItem productList={cakeList} />
        </ul>
      </section>
    </>
  );
};

export default Products;
