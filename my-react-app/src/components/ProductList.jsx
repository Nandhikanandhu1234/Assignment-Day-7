function ProductList({ products }) {
    const styles = {
      productList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        padding: '16px',
      },
      productCard: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      },
      productCardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
      },
      productImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '4px',
      },
      productTitle: {
        fontSize: '1.2em',
        margin: '12px 0',
        color: '#333',
      },
      productCategory: {
        fontSize: '0.9em',
        color: '#777',
      },
      productPrice: {
        fontSize: '1em',
        fontWeight: 'bold',
        color: '#000',
      },
    };
  
    return (
      <div style={styles.productList}>
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            style={styles.productCard}
            onMouseEnter={(e) => (e.currentTarget.style = { ...styles.productCard, ...styles.productCardHover })}
            onMouseLeave={(e) => (e.currentTarget.style = { ...styles.productCard })}
          >
            <img
              src={product.image}
              alt={product.title}
              style={styles.productImage}
            />
            <h3 style={styles.productTitle}>{product.title}</h3>
            <p style={styles.productCategory}>{product.category}</p>
            <p style={styles.productPrice}>${product.price}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  