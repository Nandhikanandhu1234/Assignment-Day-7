import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#e6f7ff', // Soft light blue
      minHeight: '100vh',
    },
    header: {
      fontSize: '2.8em', // Slightly larger for better readability
      fontWeight: 'bold',
      color: '#00264d', // Darker blue color for the header
      textAlign: 'center',
      marginBottom: '40px',
    },
    productListContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px', // Added gap for spacing between product items
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Product Dashboard</h1>
      <div style={styles.productListContainer}>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default HomePage;


