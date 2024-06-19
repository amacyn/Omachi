'Use Client'
import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';

export default function Home() {
  const images = [
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpeg',
    
  ];

  const images2 = [
    '/images/image4.jpeg',
    '/images/image5.jpeg',
    '/images/image6.jpeg',
    
  ];

  return (
    <div>
      <Navbar />
      <main>
        <h1 className='h1'>Welcome to Omachi Brand</h1>
        <div className='grid'>
         <Slideshow images={images} />
         <Slideshow images={images2} />
       </div>
      </main>
    </div>
  );
}