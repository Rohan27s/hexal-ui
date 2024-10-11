// app/layout.tsx
import { ReactNode } from 'react';
import './globals.css';  // Global Tailwind and CSS styles
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'HexaUI - Component Library',
  description: 'A scalable, customizable component library for modern web applications.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
