// components/ProductList.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchProducts } from '../products/productSlice';
import ProductCard from './ProductCard';
import style from './ProductList.module.css'

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: products, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div className={style.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={style.error}>Error: {error}</div>;
  }

  return (
    <div className={style.productList}>
      <h1>Our Products</h1>
      <div className={style.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

// Kas notiek:

// useAppDispatch - izsauc darbības Redux store

// useAppSelector - izvelk datus no Redux store

// useEffect - komponentes ielādes brīdī izsauc produktu ielādi

// loading/error stāvokļi - rāda ielādes vai kļūdas ziņojumus

// products.map - atveido katru produktu kā ProductCard komponenti

// key={product.id} - unikāls atslēgas elements React sarakstam