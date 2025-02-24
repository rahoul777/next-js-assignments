const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} SecureCity. All rights reserved.</p>
          <p>Designed for Smart City Management</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  