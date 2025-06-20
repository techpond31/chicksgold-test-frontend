import { FaShoppingCart, FaCaretUp, FaCaretDown } from "react-icons/fa";
import { GiBoltSaw, GiBurningMeteor } from "react-icons/gi";
import { SiWritedotas } from "react-icons/si";

interface ProductCardProps {
  image: string;
  name: string;
  currentPrice: string;
  oldPrice: string;
  description: string;
  gameType: "rs3" | "wow" | "gw2"; // Changed to gameType
  onSale: boolean;
  inStock: boolean;
}

export default function ProductCard({
  image,
  name,
  currentPrice,
  oldPrice,
  description,
  gameType, // Using gameType
  onSale,
  inStock,
}: ProductCardProps) {
  const renderGameIcon = () => {
    const iconClassName = "game-icon-svg";
    switch (gameType) {
      case "rs3":
        return <GiBoltSaw className={iconClassName} />;
      case "wow":
        return <GiBurningMeteor className={iconClassName} />;
      case "gw2":
        return <SiWritedotas className={iconClassName} />;
      default:
        return null;
    }
  };

  return (
    <div className="product-card">
      <div className="product-header">
        <div className="badges">
          {onSale ? (
            <span className="badge on-sale">
              <span className="dot"></span>ON SALE
            </span>
          ) : (
            <span className="badge on-sale-placeholder"></span>
          )}
          {inStock && <span className="badge in-stock">In stock</span>}
        </div>
        <div className="quantity-control">
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="quantity-input"
          />
          <div className="quantity-arrows">
            <button className="arrow-btn" aria-label="Increase quantity">
              <FaCaretUp className="arrow-icon" />
            </button>
            <button className="arrow-btn" aria-label="Decrease quantity">
              <FaCaretDown className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">
          {currentPrice} <span className="old-price">{oldPrice}</span>
        </p>
        <p className="product-description">{description}</p>
      </div>
      <div className="product-actions">
        <button className="details-btn">DETAILS</button>
        <button className="add-to-cart-btn">
          ADD <FaShoppingCart className="cart-icon" />
        </button>
      </div>
      <div className="game-icon-wrapper">{renderGameIcon()}</div>
    </div>
  );
}
