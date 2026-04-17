import { motion } from 'framer-motion';

const specialists = [
  {
    name: 'Drª Suzi Magali M. Vendas',
    role: 'Ortodontia',
    image: 'https://aleredentistaria.com.br/wp-content/uploads/2023/04/drasuzi-1024x1024.png',
  },
  {
    name: 'Dr. Vitor Bruno Teslenco',
    role: 'Cirurgia e Traumatologia Bucomaxilofacial',
    image: 'https://aleredentistaria.com.br/wp-content/uploads/2023/04/drvitor-1024x1024.png',
  },
  {
    name: 'Dra. Talita dos Anjos Vaez',
    role: 'Endodontia',
    image: 'https://aleredentistaria.com.br/wp-content/uploads/2023/04/dratalita-1024x1024.png',
  },
  {
    name: 'Dra. Renata Vaz',
    role: 'Odontopediatria',
    image: 'https://aleredentistaria.com.br/wp-content/uploads/2023/04/drarenata-1024x1024.png',
  },
  {
    name: 'Dra. Sofia Moura Gonçalves',
    role: 'Clínica Geral',
    image: 'https://aleredentistaria.com.br/wp-content/uploads/2023/04/drasofia-1024x1024.png',
  },
  {
    name: 'Dra. Isabela R. Oliveira',
    role: 'Endodontia',
    image: 'https://aleredentistaria.com.br/wp-content/uploads/2025/06/0e005228-a220-4356-a2ed-91450068c6b7-1-1-1024x1024.png',
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900"
            >
              Nossa Equipe !
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-500 max-w-lg"
            >
              Dentistas Especialistas apaixonados por transformar sorrisos!
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {specialists.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer text-center"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-6 mx-auto max-w-[280px] border-4 border-white shadow-xl">
                <div className="absolute inset-0 bg-medical-blue/0 group-hover:bg-medical-blue/10 transition-colors duration-500" />
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
              <p className="text-sm text-medical-blue font-medium uppercase tracking-wider leading-relaxed px-4">
                {person.role}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <motion.a 
            href="https://wa.me/5567999427984" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(100, 206, 251, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center justify-center w-8 h-8 bg-white/10 rounded-full group-hover:bg-medical-blue transition-colors duration-300">
               <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
               </svg>
            </div>

            <span className="relative tracking-wide text-lg">Agendar Consulta Agora</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
