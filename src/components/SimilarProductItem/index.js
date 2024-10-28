// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {imageUrl, brand, title, price, rating} = productDetails

  return (
    <li className="similar-product-item">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-product-image"
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-product-title">{brand}</p>
      <p className="similar-product-price">Rs {price}/-</p>
      <div className="similar-product-rating">
        <img
          src="https://assets.ccbp.in/frontend/react-js/star-img.png"
          alt="star"
          className="star"
        />
        <p className="rating">{rating}</p>
      </div>
    </li>
  )
}

export default SimilarProductItem
