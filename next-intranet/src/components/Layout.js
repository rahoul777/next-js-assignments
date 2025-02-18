import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
}
