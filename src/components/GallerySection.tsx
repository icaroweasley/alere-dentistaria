import { motion } from 'framer-motion';

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
  return (
    <section id="galeria" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-medical-blue font-bold tracking-widest text-xs uppercase"
          >
            Infraestrutura
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900"
          >
            Conheça nossa <span className="text-medical-blue italic">Clínica</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Um ambiente projetado para oferecer o máximo de conforto, tecnologia e biossegurança para você e sua família.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group rounded-[2rem] overflow-hidden cursor-pointer shadow-lg shadow-gray-200/40"
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
    </section>
  );
};

export default GallerySection;
