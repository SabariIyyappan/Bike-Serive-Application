import React from 'react';

const QuickBooking = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftContent}>
        <h2 style={styles.heading}>Quick 3-step Booking</h2>
        <ol style={styles.steps}>
          <li style={styles.step}>1.Choose the required service</li>
          <li style={styles.step}>2.Enter your locality & contact details</li>
          <li style={styles.step}>3.Leave the rest to GoBumpr's service experts</li>
        </ol>
      </div>
      <div style={styles.rightContent}>
        <img src="https://static.gobumpr.com/web-app/features/3-step-final.svg" alt="Booking Illustration" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {

    container: {
      maxWidth: '900px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '8px',
      flexWrap: 'wrap', // Allow content to wrap onto multiple lines
    },
    leftContent: {
      flex: '1',
      textAlign: 'left',
      paddingRight: '20px',
      minWidth: '300px', // Ensure minimum width to avoid squeezing content
      marginBottom: '20px', // Add space between content and image on smaller screens
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
      textAlign: 'center',
      fontWeight: 'bold',
    },
    steps: {
      listStyle: 'none',
      padding: '0',
      fontSize: '1.2rem',
      lineHeight: '2',
      textAlign: 'left',
      marginTop: '20px',
    },
    step: {
      marginBottom: '10px',
      paddingLeft: '20px',
      position: 'relative',
    },
    stepBefore: {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '10px',
      height: '10px',
      backgroundColor: '#333',
      borderRadius: '50%',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
      marginTop: '20px',
      minWidth: '300px', // Ensure minimum width to avoid squeezing content
    },
};

export default QuickBooking;
