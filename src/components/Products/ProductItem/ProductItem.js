import classes from "./ProductItem.module.css";
import InputForm from "../../UI/InputForm";

const ProductItem = (props) => {
  const { productList } = props;

  const addToCartHandler = (productId, amount) => {
    // productList.product.id === productId
  };

  return productList.map((product) => (
    <li className={classes.product} key={product.id}>
      <div className={classes.productImage}>
        <img src={product.image} alt="product" />
      </div>
      <div className={classes.productDescription}>
        <h3>{product.name}</h3>
        <div className={classes.description}>{product.description}</div>
        <div className={classes.price}>{product.price} kr</div>
      </div>
      <InputForm
        id={product.id}
        addToCart={addToCartHandler.bind(null, product.id)}
      />
    </li>
  ));
};

export default ProductItem;
