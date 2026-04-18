import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
const images = [
  "https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-1-1024x1024.png",
  "https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-6-1-1024x1024.png",
  "https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-3-1-1024x1024.png",
  "https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-4-1-1024x1024.png",
  "https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-5-1-1024x1024.png",
  "https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-9-1-1024x1024.png",
  "https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-20-1-1024x1024.png",
  "https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-14-1-1024x1024.png",
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section id="galeria" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-alere-plum font-bold tracking-widest text-xs uppercase"
          >
            Infraestrutura
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center flex flex-col items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10"
          >
            <span className="text-lg md:text-2xl font-bold tracking-widest text-slate-500">Conheça Nossa</span>
            <span className="text-alere-plum font-['Adelia'] text-5xl md:text-7xl font-normal leading-tight drop-shadow-sm px-2">Clínica</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Um ambiente projetado para oferecer o máximo de conforto, tecnologia e biossegurança para você e sua família.
          </p>
        </div>

        <div className="columns-3 lg:columns-4 gap-2 space-y-2 md:gap-6 md:space-y-6">
          {/* Mobile Only Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            onClick={() => setSelectedImage("https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-1-1-1024x1024.png")}
            className="block md:hidden relative group rounded-xl overflow-hidden cursor-pointer shadow-sm shadow-gray-200/40"
          >
            <img 
              src="https://aleredentistaria.com.br/wp-content/uploads/2023/10/amada-1-1-1024x1024.png" 
              alt="Alere Gallery Mobile Extra"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(src)}
              className="relative group rounded-xl md:rounded-[2rem] overflow-hidden cursor-pointer shadow-sm md:shadow-lg shadow-gray-200/40"
            >

              <img 
                src={src} 
                alt={`Alere Gallery ${index}`}
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[3rem] p-3 md:p-6 shadow-2xl overflow-hidden flex items-center justify-center"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-black/10 backdrop-blur-md text-gray-900 hover:bg-black/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <img 
                src={selectedImage} 
                alt="Galeria Expandida" 
                className="w-full max-h-[80vh] object-contain rounded-2xl md:rounded-[2rem]" 
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;

