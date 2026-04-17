import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import HouseSection from './components/HouseSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import FooterSection from './components/FooterSection';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <div className="relative z-20">
        <AboutSection />
        <ServicesSection />
        <HouseSection />
        <GallerySection />
        <ReviewsSection />
        <TeamSection />
        <FooterSection />
      </div>

      <WhatsAppButton />
    </main>
  );
}

export default App;
