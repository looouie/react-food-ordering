import classes from "./ProductItem.module.css";
import InputForm from "../../UI/InputForm/InputForm";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const ProductItem = (props) => {
  const { productList } = props;

  const dispatch = useDispatch();

  const addToCartHandler = (product, amount) => {
    const productToAdd = { ...product, amount: amount };

    dispatch(cartActions.addOrIncrease(productToAdd));
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
        addToCart={addToCartHandler.bind(null, product)}
      />
    </li>
  ));
};

export default ProductItem;
