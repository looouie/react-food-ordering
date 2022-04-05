import classes from "./ProductItem.module.css";
import cinnamonBun from "../../../assets/cinnamonbun.png";

const ProductItem = () => {
  const dummy = {
    id: "bread-01",
    name: "Cinnamon bun",
    description: "delicious",
    amount: 0,
    price: 10,
  };

  return (
    <li className={classes.product}>
      <div className={classes.productImage}>
        <img src={cinnamonBun} alt="product" />
      </div>
      <div className={classes.productDescription}>
        <h3>{dummy.name}</h3>
        <div className={classes.description}>{dummy.description}</div>
        <div className={classes.price}>{dummy.price}</div>
      </div>
    </li>
  );
};

export default ProductItem;
