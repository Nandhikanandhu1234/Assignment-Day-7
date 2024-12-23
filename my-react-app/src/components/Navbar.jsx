import { Link } from 'react-router-dom';

function Navbar() {
  const styles = {
    nav: {
      padding: '10px 20px',
      backgroundColor: '#333', // Dark background color
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    link: {
      color: '#fff', // White text color
      textDecoration: 'none', // Remove underline
      fontSize: '1.2em',
      margin: '0 15px',
      transition: 'color 0.3s ease', // Smooth color transition
    },
    linkHover: {
      color: '#007BFF', // Light blue color on hover
    },
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link} onMouseOver={(e) => e.target.style.color = styles.linkHover.color} onMouseOut={(e) => e.target.style.color = styles.link.color}>
        Home
      </Link> 
      |
      <Link to="/add-product" style={styles.link} onMouseOver={(e) => e.target.style.color = styles.linkHover.color} onMouseOut={(e) => e.target.style.color = styles.link.color}>
        Add Product
      </Link>
    </nav>
  );
}

export default Navbar;

