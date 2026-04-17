import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muda a cor apenas quando sair da Hero (100vh)
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Especialidades', href: '#servicos' },
    { name: 'Nossa Casa', href: '#casa' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Contatos', href: '#contato' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        animate={{
          backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          borderColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full max-w-7xl flex items-center justify-between backdrop-blur-xl border rounded-full px-6 py-3 shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Alere Dentistaria Logo" 
              className={`w-full h-full object-contain transition-all duration-500`}
            />
          </div>
          <motion.span 
            animate={{ color: isScrolled ? '#ffffff' : '#0f172a' }}
            className="font-bold tracking-tight"
          >
            Alere Dentistaria
          </motion.span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              animate={{ color: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.7)' }}
              whileHover={{ color: isScrolled ? '#ffffff' : '#0f172a' }}
              className="text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.button 
          animate={{
            backgroundColor: isScrolled ? '#64CEFB' : '#0f172a',
            color: isScrolled ? '#0f172a' : '#ffffff',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-sm px-5 py-2 rounded-full transition-all duration-300 group font-bold shadow-lg"
        >
          Agendar Consulta
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
