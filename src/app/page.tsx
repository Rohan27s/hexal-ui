import Hero from './components/Hero';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Packages from './components/Packages';

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <Advantages />
      <Packages />
    </div>
  );
}
