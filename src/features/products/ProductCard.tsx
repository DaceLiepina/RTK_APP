// components/ProductCard.tsx
import React from 'react';
import { removeProduct, type Product } from './productSlice';
import style from './ProductList.module.css'
import { useDispatch } from 'react-redux';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
      const dispatch = useDispatch();
  return (
    <div className={style.productCard}>
        <button
        className={style.deleteBtn}
        onClick={() => dispatch(removeProduct(product.id))}
      >
        X
      </button>
      <div className={style.productImage}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={style.productInfo}>
        <h3 className={style.productTitle}>{product.title}</h3>
        <p className={style.productCategory}>{product.category}</p>
        <p className={style.productDescription}>
          {product.description.substring(0, 100)}...
        </p>
        <div className={style.productRating}>
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <div className={style.productPrice}>${product.price}</div>
        <button className={style.addToCardBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

// Kas notiek:

// ProductCardProps - komponentes props tipa definīcija

// product - props, kas satur produkta datus

// product.image - produkta attēls

// product.title - produkta nosaukums

// product.description.substring(0, 100) - apraksta saīsinājums

// product.rating - vērtējuma informācija

// product.price - produkta cena

// Add to Cart - poga (pagaidām bez funkcionalitātes)

// 7. Datu plūsma visā aplikācijā
// App ielādējas → ProductList tiek atveidots

// useEffect izsauc fetchProducts() → dispatch darbība

// Redux sagaida API atbildi un atjaunina state

// ProductList pāratveidojas ar jaunajiem datiem

// Katrs produkts tiek padots uz ProductCard komponenti

// ProductCard atveido produkta informāciju lietotājam

// 8. TypeScript priekšrocības šajā projektā
// Tipu drošība - kompilators pārbauda visus tipus

// Autocomplete - IDE zina visas pieejamās funkcijas un īpašības

// Kļūdu novēršana - tipu neatbilstības tiek noķertas agri

// Labāka dokumentācija - kods ir pašsaprotamāks