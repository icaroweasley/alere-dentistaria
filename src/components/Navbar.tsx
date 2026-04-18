import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <nav className="fixed top-6 left-0 right-0 z-[1000] flex justify-center px-4">
        <motion.div 
          animate={{
            backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.7)' : (isOpen ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.7)'),
            borderColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full max-w-7xl flex items-center justify-between backdrop-blur-xl border rounded-full px-4 md:px-6 py-3 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 md:h-10 w-28 md:w-48 flex items-center justify-start overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Alere Dentistaria Logo" 
                className={`w-full h-full object-contain object-left transition-all duration-500`}
                style={{ filter: (isScrolled || isOpen) ? 'brightness(0) invert(1)' : 'none' }}
              />
            </div>
          </div>

          {/* Desktop Links */}
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

          <div className="flex items-center gap-2 md:gap-4">
            <motion.button 
              animate={{
                backgroundColor: (isScrolled || isOpen) ? '#75255b' : '#0f172a',
                color: '#ffffff',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`items-center gap-2 text-[10px] md:text-sm px-3 md:px-5 py-2 rounded-full transition-all duration-300 group font-bold shadow-lg ${isOpen ? 'hidden lg:flex' : 'flex'}`}
            >
              <span>Agendar</span> <span className="hidden md:inline">Consulta</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${ (isScrolled || isOpen) ? 'bg-white/10 text-white' : 'bg-black/5 text-slate-800'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[999] bg-slate-900/95 backdrop-blur-2xl lg:hidden flex flex-col pt-32 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white/90 hover:text-alere-plum transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="https://wa.me/5567999427984"
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex items-center justify-center gap-3 bg-alere-plum text-white py-5 rounded-2xl text-lg font-bold shadow-xl"
              >
                Agendar Consulta Agora
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
