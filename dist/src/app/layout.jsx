import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export var metadata = {
  title: 'HexalUI - Component Library',
  description: 'A scalable, customizable component library for modern web applications.',
};
export default function RootLayout(_a) {
  var children = _a.children;
  return (<html lang="en">
    <body className="bg-primary text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </html>);
}
