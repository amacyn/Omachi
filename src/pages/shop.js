'Use Client'
import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import style from '../app/globals.css'
import styles from '../styles/Shop.module.css'

export default function Shop() {
  const products = [
    { id: 1, name: 'Teddy Bomber', price: 200, image: '/images/image1.jpeg' },
    { id: 2, name: 'Sleeve Corset Top', price: 100, image: '/images/image2.jpeg'  },
    { id: 3, name: 'Satin Tea Dress', price: 120, image: '/images/image3.jpeg'  },
    { id: 4, name: 'Rib Scoop Neck Bodysuit', price: 110, image:'/images/image4.jpeg'  },
    { id: 1, name: 'Teddy Bomber', price: 200, image: '/images/image5.jpeg' },
    { id: 2, name: 'Sleeve Corset Top', price: 100, image: '/images/image6.jpeg'  },
    { id: 3, name: 'Satin Tea Dress', price: 120, image: '/images/image7.jpeg'  },
    { id: 4, name: 'Rib Scoop Neck Bodysuit', price: 110, image:'/images/image8.jpeg'  },
    { id: 2, name: 'Sleeve Corset Top', price: 100, image: '/images/image9.jpeg'  },
    { id: 3, name: 'Satin Tea Dress', price: 120, image: '/images/image10.jpeg'  }
  ];

  return (
    <>
      <Navbar />
      <main>
        <h1>Shop</h1>
        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
