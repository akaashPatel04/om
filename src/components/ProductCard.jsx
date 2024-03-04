import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "../styles/components/productCard.css";

const ProductCard = ({ product }) => {
  return (
    <Link className="productCard" to={`/product/${product.id}`}>
      <img src={product.thumbnail} alt="product" />
      <p>{product.title}</p>
      <div>
        <ReactStars
          edit={false}
          color="rgb(100, 100, 100)"
          activeColor="orange"
          value={product.rating}
          isHalf={true}
          size={window.innerWidth > 600 ? 25 : 20}
        />
        <span>({product.rating.count} Reviews)</span>
      </div>
      <span>₹{product.price}</span>
    </Link>
  );
};

export default ProductCard;
