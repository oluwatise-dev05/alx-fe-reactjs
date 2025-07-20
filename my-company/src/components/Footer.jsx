function Footer() {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '10px', marginTop: '20px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

