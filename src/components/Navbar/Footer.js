import React, { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.social-icon');
    icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.animation = 'bounce 0.5s ease-in-out';
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.animation = 'none';
      });
    });
  }, []);

  return (
    <footer style={styles.footer}>
      <div style={styles.socialIcons}>
        {socialMediaLinks.map((link, index) => (
          <SocialIcon key={index} url={link.url} style={styles.icon} className="social-icon" />
        ))}
      </div>
      <div style={styles.footerText}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

const socialMediaLinks = [
  { url: "https://twitter.com" },
  { url: "https://facebook.com" },
  { url: "https://instagram.com" },
  { url: "https://linkedin.com" },
  { url: "https://youtube.com" },
];

const styles = {
  footer: {
    backgroundColor: '#053e4f',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #555',
    marginTop: '20px',
  },
  socialIcons: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    margin: '0 10px',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    transition: 'transform 0.3s ease-in-out',
  },
  footerText: {
    fontSize: '14px',
    marginTop: '10px',
  },
};

// Add keyframes for the bounce animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`, styleSheet.cssRules.length);

export default Footer;
