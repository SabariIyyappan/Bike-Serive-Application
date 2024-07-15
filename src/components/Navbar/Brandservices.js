import React, { useState } from 'react';

const BrandsServiced = () => {
  // Example list of bike brands
  const brands = [
    "Honda", "Hero MotoCorp", "Hero Honda", "TVS", "Bajaj", "Yamaha", "Royal Enfield", "Suzuki",
    "Mahindra", "Vespa", "Harley Davidson", "Kawasaki", "Triumph", "KTM", "Aprilia", "Kinetic",
    "Ducati", "Moto Guzzi", "DSK Benelli", "Hyosung", "BMW", "LML", "MV Agusta", "Eider", "Victory",
    "UM Motorcycles", "Indian Motorcycle", "Peugeot", "Royal Touch India", "UML India", "Regal Raptor",
    "Lohia", "Palatino", "Keeway", "Vyrus", "Husqvarna", "Terra", "Hollister"
  ];

  // Calculate number of brands per column
  const columnCount = 5;
  const totalBrands = brands.length;
  const brandsPerColumn = Math.ceil(totalBrands / columnCount);

  // State to manage hover
  const [hoveredBrand, setHoveredBrand] = useState(null);

  // Split brands into columns
  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    columns.push(brands.slice(i * brandsPerColumn, (i + 1) * brandsPerColumn));
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Brands Serviced By Us</h2>
      <div style={styles.columns}>
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            style={{
              ...styles.column,
              backgroundColor: hoveredBrand && hoveredBrand.column === columnIndex ? '#a9c0cd' : '#b8cbd1',
            }}
          >
            <ul style={styles.list}>
              {column.map((brand, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.brand,
                    backgroundColor: hoveredBrand && hoveredBrand.column === columnIndex && hoveredBrand.index === index ? '#cad6db' : 'transparent',
                  }}
                  onMouseEnter={() => setHoveredBrand({ column: columnIndex, index })}
                  onMouseLeave={() => setHoveredBrand(null)}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p style={styles.footerText}>Contact us today to service your bike!</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    color: 'black',
  },
  heading: {
    color: 'blue',
    fontSize: '1.8rem',
    marginBottom: '20px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)', // Text shadow for depth
  },
  columns: {
    display: 'flex',
    justifyContent: 'center', // Center columns horizontally
    flexWrap: 'wrap',
    gap: '20px', // Spacing between columns
    marginTop: '20px',
  },
  column: {
    flex: '1 1 20%', // Adjust width and allow growth to fill space
    textAlign: 'left',
    minWidth: '150px', // Ensure columns don't collapse too small
    maxWidth: '250px', // Limit maximum width to maintain uniformity
    padding: '15px', // Padding around each column
    backgroundColor: '#b8cbd1', // Background color of each column
    borderRadius: '12px', // Rounded corners for a softer look
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow for depth
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease', // Added transition for background-color
    cursor: 'pointer', // Cursor pointer on hover
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    fontSize: '1.2rem',
    lineHeight: '2',
  },
  brand: {
    padding: '5px 10px',
    marginBottom: '5px',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease', // Transition for background color change
    cursor: 'pointer', // Cursor pointer on hover
  },
  footerText: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#666',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)', // Text shadow for depth
  },
};

export default BrandsServiced;
