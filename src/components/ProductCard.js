

import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Shop.module.css'

export default function ProductCard({ product }) {
  const { id, name, price, image } = product;

  const handleBuy = () => {
    const message = `Hello, I'm interested in buying the ${name} for ₦${price}. Check the details here: ${window.location.origin}/product/${id}`;
    window.open(`https://wa.me/+2348131827781?text=${encodeURIComponent(message)}&image=${encodeURIComponent(image)}`, '_blank');
  };

  return (
    <div className={styles.productCard}>
      <Link href={`/product/${id}`} legacyBehavior>
        <a className={styles.link}>
          <Image src={image} alt={name} width={50} height={50} />
          <h2>{name}</h2>
        </a>
      </Link>
      <p>₦{price}</p>
      <button className={styles.button} onClick={handleBuy}>Buy</button>
    </div>
  );
}
