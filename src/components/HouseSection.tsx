import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const houseImages = [
  {
    title: 'Edifício Atrium',
    src: 'https://aleredentistaria.com.br/wp-content/uploads/2025/05/Sem-nome-5-x-5-cm-2-1.png',
    desc: 'Localização privilegiada no Jardim dos Estados.'
  },
  {
    title: 'Consultórios Modernos',
    src: 'https://aleredentistaria.com.br/wp-content/uploads/2025/05/Design-sem-nome-4-1-1024x1024.png',
    desc: 'Ambientes equipados com o que há de mais moderno.'
  },
  {
    title: 'Recepção Acolhedora',
    src: 'https://aleredentistaria.com.br/wp-content/uploads/2025/05/Sem-nome-5-x-5-cm-4-1.png',
    desc: 'Conforto e atenção desde o primeiro momento.'
  },
  {
    title: 'Área Kids',
    src: 'https://aleredentistaria.com.br/wp-content/uploads/2025/05/Sem-nome-5-x-5-cm-5-1.png',
    desc: 'Um espaço lúdico para os pequenos se sentirem em casa.'
  }
];

const HouseSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="casa" className="py-12 md:py-24 px-6 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center flex flex-col items-center justify-center gap-2 mb-8 md:mb-20 mt-8"
          >
            <span className="text-lg md:text-2xl font-bold tracking-widest text-slate-500">Nossa</span>
            <span className="text-alere-plum font-['Adelia'] text-6xl md:text-[7.5rem] font-normal leading-tight drop-shadow-sm px-2">Casa!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Preparamos cada detalhe para que sua experiência seja única, tranquila e transformadora.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {houseImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-[2.5rem] shadow-2xl shadow-gray-200/50 bg-white cursor-pointer"
            >
              <motion.div
                initial="rest"
                whileHover="active"
                whileTap="active"
                whileInView={isMobile ? "active" : "rest"}
                viewport={{ 
                  once: false, 
                  margin: "-30% 0px -30% 0px" // Trigger when more centered on mobile
                }}
                className="relative overflow-hidden w-full h-full rounded-[2.5rem]"
              >
                <div className="aspect-[3/2] md:aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={item.src}
                    alt={item.title}
                    variants={{
                      rest: { scale: 1 },
                      active: { scale: 1.1 }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                  <motion.p
                    variants={{
                      rest: { opacity: 0, height: 0, marginTop: 0 },
                      active: { opacity: 1, height: 'auto', marginTop: 8 }
                    }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="text-white/70 text-sm overflow-hidden"
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseSection;

