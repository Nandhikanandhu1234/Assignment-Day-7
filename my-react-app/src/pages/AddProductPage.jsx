import { useState } from 'react';

function AddProductPage() {
  const [form, setForm] = useState({
    name: '',
    image: null,
    price: '',
    category: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    image: '',
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    // Validate the form
    if (!form.name) formErrors.name = 'Product name is required.';
    if (!form.image) formErrors.image = 'Product image is required.';
    if (!form.price) formErrors.price = 'Price is required.';
    if (!form.category) formErrors.category = 'Category is required.';
    
    setErrors(formErrors);

    // If no errors, proceed with form submission
    if (Object.keys(formErrors).length === 0) {
      console.log(form);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      backgroundColor: '#e6f7ff',  // Light blue background
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: '2.5em',
      marginBottom: '20px',
      color: '#003366',  // Dark blue color for header
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    inputWrapper: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px',
      width: '100%',
    },
    label: {
      fontSize: '1em',
      marginBottom: '8px',
      color: '#333',  // Darker text for labels
    },
    input: {
      padding: '12px',
      margin: '0',
      borderRadius: '4px',
      border: '1px solid #aaa',  // Light gray border for inputs
      fontSize: '1em',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#007BFF',  // Blue border on focus
    },
    error: {
      color: '#ff4d4d',  // Red color for errors
      fontSize: '0.9em',
      marginTop: '5px',
    },
    button: {
      padding: '12px',
      backgroundColor: '#007BFF',  // Bright blue button
      color: 'white',
      fontSize: '1.2em',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',  // Darker blue when hovered
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Add Product</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.inputWrapper}>
          <label style={styles.label} htmlFor="name">Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
            style={styles.input}
          />
          {errors.name && <div style={styles.error}>{errors.name}</div>}
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label} htmlFor="image">Product Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            style={styles.input}
          />
          {errors.image && <div style={styles.error}>{errors.image}</div>}
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label} htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter product price"
            style={styles.input}
          />
          {errors.price && <div style={styles.error}>{errors.price}</div>}
        </div>

        <div style={styles.inputWrapper}>
          <label style={styles.label} htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Enter product category"
            style={styles.input}
          />
          {errors.category && <div style={styles.error}>{errors.category}</div>}
        </div>

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;

