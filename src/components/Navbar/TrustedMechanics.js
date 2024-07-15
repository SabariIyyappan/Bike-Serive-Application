import React from 'react';

const TrustedMechanics = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftContent}>
        <img src="https://static.gobumpr.com/web-app/features/trusted-mechanics.svg" alt="Booking Illustration" style={styles.image} />
      </div>
      <div style={styles.rightContent}>
        <h2 style={styles.heading}>Trusted Mechanics</h2>
        <ul style={styles.list}>
          <li>1.Expert mechanics for your every need</li>
          <li>2.Best-in-class workmanship</li>
          <li>3.Top of the line equipment for the best service experience</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', 
  },
  leftContent: {
    flex: '1',
    textAlign: 'left',
    paddingRight: '20px',
    minWidth: '300px', 
    marginBottom: '20px', 
  },
  rightContent: {
    flex: '1',
    textAlign: 'center',
    padding: '20px',
    minWidth: '300px', // Ensure minimum width to avoid squeezing content
  },
  heading: {
    color: 'blue',
    fontSize: '1.8rem',
    marginBottom: '20px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    fontSize: '1.2rem',
    lineHeight: '2',
    textAlign: 'left',
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginTop: '20px',
    minWidth: '300px', // Ensure minimum width to avoid squeezing content
  },
};

export default TrustedMechanics;
