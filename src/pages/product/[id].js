'use client'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import style from '../../app/globals.css';
import styles from '../../styles/product.module.css';

const ProductDetails = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    console.log('Fallback is true, showing loading state');
    return <div>Loading...</div>;
  }

  const imageUrl = `/images/${product.image}`;

  console.log('Product image URL:', imageUrl);

  return (
    <>
      <Navbar />
      <div className={styles.product}>
        <h1>{product.name}</h1>
        <Image
          src={'/public/images'}
          alt={product.name}
          width={300}
          height={300}
        />
        <p>Price: ₦{product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetch('http://localhost:3001/products');
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    const products = await res.json();

    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`http://localhost:3001/products/${params.id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    const product = await res.json();

    if (!product) {
      return {
        notFound: true,
      };
    }

    return { props: { product } };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      notFound: true,
    };
  }
}

export default ProductDetails;
