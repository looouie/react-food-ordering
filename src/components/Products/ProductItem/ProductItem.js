import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { productList } = props;

  return productList.map((product) => (
    <li className={classes.product} id={product.id}>
      <div className={classes.productImage}>
        <img src={product.image} alt="product" />
      </div>
      <div className={classes.productDescription}>
        <h3>{product.name}</h3>
        <div className={classes.description}>{product.description}</div>
        <div className={classes.price}>{product.price} kr</div>
      </div>
    </li>
  ));
};

export default ProductItem;
