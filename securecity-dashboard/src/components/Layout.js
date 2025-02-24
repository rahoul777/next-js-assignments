import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white text-center p-4">
        SecureCity Dashboard &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
