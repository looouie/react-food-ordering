import classes from "./ProductItem.module.css";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

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

      <form className={classes.form}>
        <div className={classes.input}>
          <HiOutlinePlus />
          <input id={product.id} type="text" defaultValue="0" />
          <HiOutlineMinus />
        </div>
        <button>Add</button>
      </form>
    </li>
  ));
};

export default ProductItem;
