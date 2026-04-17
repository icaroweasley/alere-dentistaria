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
  return (
    <section id="casa" className="py-24 px-6 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900"
          >
            Conheça Nossa <span className="text-medical-blue italic">Casa !</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
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
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-white"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseSection;
