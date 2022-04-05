import classes from "./Products.module.css";
import ProductItem from "./ProductItem/ProductItem";

const Products = () => {
  return (
    <>
      <section className={classes.products}>
        <h2 className={classes.categoryName}>Bread</h2>
        <ul>
          <ProductItem />
          <ProductItem />
        </ul>
      </section>
    </>
  );
};

export default Products;
