import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "5567999427984";
  const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta na Alere Dentistaria.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => {
      // Ajustado para mudar logo no início da rolagem,
      // pois o botão está na parte inferior e entra no fundo branco primeiro.
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 150,
        damping: 30,
        delay: 1 
      }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[200] group"
    >
      {/* Realism Tooltip */}
      <motion.div 
        animate={{
          backgroundColor: isScrolled ? 'rgba(34, 197, 94, 0.6)' : 'rgba(255, 255, 255, 0.2)',
          borderColor: isScrolled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)'
        }}
        transition={{ duration: 0.5 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-5 py-2.5 backdrop-blur-[30px] border rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap hidden md:block"
      >
        <p className="text-white font-medium text-sm tracking-wide drop-shadow-md">
          Agende sua Consulta
        </p>
      </motion.div>

      {/* Real Glass Button */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        {/* The Glass Body - Sincronizado e com Opacidade Maior */}
        <motion.div 
          animate={{
            backgroundColor: isScrolled ? 'rgba(34, 197, 94, 0.6)' : 'rgba(255, 255, 255, 0.2)',
            borderColor: isScrolled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.5)',
            boxShadow: isScrolled ? '0 10px 40px -10px rgba(34, 197, 94, 0.3)' : '0 10px 40px -10px rgba(255, 255, 255, 0.2)'
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative w-full h-full rounded-full backdrop-blur-[30px] border overflow-hidden"
        >
          
          {/* Glass Reflections / Refraction Simulation */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5" />
          
          {/* Main Icon with Refraction Look */}
          <div className="relative w-full h-full flex items-center justify-center">
             {/* Refracted Shadow - Subtle and same color as theme */}
             <div className={`absolute inset-0 flex items-center justify-center opacity-30 filter blur-[2px] translate-x-0.5 translate-y-0.5 ${isScrolled ? 'text-green-900' : 'text-gray-900'}`}>
                <WhatsappIcon className="w-8 h-8 md:w-10 md:h-10" />
             </div>
             
             <motion.div
               animate={{ color: '#ffffff' }}
               transition={{ duration: 0.5 }}
             >
               <WhatsappIcon className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]" />
             </motion.div>
          </div>

          {/* Superior Highlight for Liquid Effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </motion.a>
  );
};

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default WhatsAppButton;
