import { motion } from 'framer-motion';

const ToothBase = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M82.2,28.8C80.3,21,73.1,15.6,65,15.6c-4.4,0-8.5,1.8-11.5,4.9c-1,1.1-2.9,1.1-3.9,0c-3-3.1-7.1-4.9-11.5-4.9c-8.1,0-15.3,5.4-17.2,13.2c-1.6,6.5-0.1,13.1,4,18.3c1,1.3,1.8,2.8,2.2,4.4l3.1,12.7c1.3,5.1,5.9,8.7,11.2,8.7c4.6,0,8.8-2.6,10.6-6.8l2.5-5.9c0.8-1.9,3.5-1.9,4.3,0l2.5,5.9c1.9,4.2,6.1,6.8,10.6,6.8c5.2,0,9.9-3.5,11.2-8.7l3.1-12.7c0.4-1.6,1.2-3.1,2.2-4.4C82.3,42,83.8,35.4,82.2,28.8z" fill="#FFF" stroke="#E2E8F0" strokeWidth="3"/>
    {children}
  </svg>
);

const ToothClassic = ({ className }: { className?: string }) => (
  <ToothBase className={className}>
    <circle cx="35" cy="38" r="4" fill="#1E293B"/>
    <circle cx="60" cy="38" r="4" fill="#1E293B"/>
    <path d="M42 45 Q 47.5 50 53 45" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="28" cy="42" r="3" fill="#F472B6" opacity="0.6"/>
    <circle cx="67" cy="42" r="3" fill="#F472B6" opacity="0.6"/>
  </ToothBase>
);

const ToothWink = ({ className }: { className?: string }) => (
  <ToothBase className={className}>
    <path d="M31 38 Q 35 34 39 38" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="60" cy="38" r="4" fill="#1E293B"/>
    <path d="M42 45 Q 47.5 48 53 45" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M45 46 Q 47.5 54 50 46 Z" fill="#F472B6"/>
    <circle cx="25" cy="41" r="3" fill="#F472B6" opacity="0.6"/>
    <circle cx="70" cy="41" r="3" fill="#F472B6" opacity="0.6"/>
  </ToothBase>
);

const ToothStar = ({ className }: { className?: string }) => (
  <ToothBase className={className}>
    <path d="M35 33 L 37 37 L 41 38 L 38 41 L 39 45 L 35 43 L 31 45 L 32 41 L 29 38 L 33 37 Z" fill="#FBBF24"/>
    <path d="M60 33 L 62 37 L 66 38 L 63 41 L 64 45 L 60 43 L 56 45 L 57 41 L 54 38 L 58 37 Z" fill="#FBBF24"/>
    <path d="M42 48 Q 47.5 55 53 48 Z" fill="#1E293B"/>
    <circle cx="23" cy="45" r="3" fill="#F472B6" opacity="0.5"/>
    <circle cx="72" cy="45" r="3" fill="#F472B6" opacity="0.5"/>
  </ToothBase>
);

const ToothNerd = ({ className }: { className?: string }) => (
  <ToothBase className={className}>
    <circle cx="35" cy="38" r="7" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <circle cx="60" cy="38" r="7" stroke="#1E293B" strokeWidth="2" fill="none"/>
    <path d="M42 38 L 53 38" stroke="#1E293B" strokeWidth="2" />
    <circle cx="35" cy="38" r="2" fill="#1E293B"/>
    <circle cx="60" cy="38" r="2" fill="#1E293B"/>
    <path d="M45 47 A 3 3 0 0 0 50 47" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </ToothBase>
);

const ToothSleepy = ({ className }: { className?: string }) => (
  <ToothBase className={className}>
    <path d="M30 38 Q 35 41 40 38" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M55 38 Q 60 41 65 38" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <circle cx="47.5" cy="46" r="2" fill="#1E293B"/>
    <text x="65" y="25" fill="#94A3B8" fontSize="14" fontWeight="bold">Z</text>
    <text x="76" y="18" fill="#94A3B8" fontSize="10" fontWeight="bold">z</text>
    <circle cx="28" cy="42" r="3" fill="#F472B6" opacity="0.4"/>
    <circle cx="67" cy="42" r="3" fill="#F472B6" opacity="0.4"/>
  </ToothBase>
);

const ToothCool = ({ className }: { className?: string }) => (
  <ToothBase className={className}>
    <path d="M26 35 L 69 35 L 65 42 Q 55 45 47.5 35 Q 40 45 30 42 Z" fill="#1E293B"/>
    <path d="M60 36 L 65 36 M 35 36 L 40 36" stroke="#FFF" strokeWidth="1" strokeLinecap="round"/>
    <path d="M44 48 Q 47.5 50 51 48" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </ToothBase>
);

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
    <section id="equipe" className="py-12 md:py-24 px-6 bg-alere-pink/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 mb-12 md:mb-16 w-full">
          <div className="space-y-4 w-full flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="text-center flex flex-col items-center justify-center gap-2 mb-8 md:mb-16"
            >
              <span className="text-lg md:text-2xl font-bold tracking-widest text-slate-500">Nossa</span>
              <span className="text-alere-plum font-['Adelia'] text-5xl md:text-7xl font-normal leading-tight drop-shadow-sm px-2">Equipe!</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: false }}
              className="text-gray-500 max-w-lg text-center mx-auto"
            >
              Dentistas Especialistas apaixonados por transformar sorrisos!
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-12">
          {specialists.map((person, index) => {
            
            // Generate a unique combo of 3 teeth per doctor
            const teethCombos = [
              [ToothClassic, ToothWink, ToothStar],
              [ToothCool, ToothNerd, ToothClassic],
              [ToothSleepy, ToothClassic, ToothWink],
              [ToothStar, ToothClassic, ToothCool],
              [ToothWink, ToothSleepy, ToothStar],
              [ToothNerd, ToothCool, ToothWink]
            ];
            
            const posCombos = [
              // Config 0: Top-Left, Top-Right, Bottom-Left
              [
                "top-[5%] left-[5%] md:top-[10%] md:left-[10%] group-hover:-translate-x-6 md:group-hover:-translate-x-10 group-hover:-translate-y-6 md:group-hover:-translate-y-10 rotate-[-20deg] group-hover:rotate-[-35deg]",
                "top-[5%] right-[5%] md:top-[10%] md:right-[10%] group-hover:translate-x-8 md:group-hover:translate-x-12 group-hover:-translate-y-6 md:group-hover:-translate-y-10 rotate-[15deg] group-hover:rotate-[25deg]",
                "bottom-[10%] left-[10%] md:bottom-[15%] md:left-[15%] group-hover:-translate-x-6 md:group-hover:-translate-x-10 group-hover:translate-y-6 md:group-hover:translate-y-10 rotate-[-10deg] group-hover:rotate-[-40deg]"
              ],
              // Config 1: Right-High, Right-Low, Left-Middle
              [
                "top-[10%] right-[0%] group-hover:translate-x-8 md:group-hover:translate-x-12 group-hover:-translate-y-4 md:group-hover:-translate-y-8 rotate-[20deg] group-hover:rotate-[35deg]",
                "bottom-[15%] right-[5%] group-hover:translate-x-6 md:group-hover:translate-x-10 group-hover:translate-y-6 md:group-hover:translate-y-10 rotate-[40deg] group-hover:rotate-[50deg]",
                "top-[40%] left-[5%] group-hover:-translate-x-8 md:group-hover:-translate-x-12 rotate-[-30deg] group-hover:rotate-[-45deg]"
              ],
              // Config 2: Top-Center, Bottom-Left, Bottom-Right
              [
                 "top-[-5%] left-[40%] group-hover:-translate-y-8 md:group-hover:-translate-y-12 rotate-[-5deg] group-hover:rotate-[-10deg]",
                 "bottom-[0%] left-[5%] group-hover:-translate-x-8 md:group-hover:-translate-x-12 group-hover:translate-y-4 md:group-hover:translate-y-8 rotate-[-35deg] group-hover:rotate-[-45deg]",
                 "bottom-[0%] right-[5%] group-hover:translate-x-8 md:group-hover:translate-x-12 group-hover:translate-y-6 md:group-hover:translate-y-10 rotate-[25deg] group-hover:rotate-[35deg]"
              ],
              // Config 3: Left-High, Right-Middle, Bottom-Center
              [
                "top-[15%] left-[0%] group-hover:-translate-x-8 md:group-hover:-translate-x-12 group-hover:-translate-y-2 md:group-hover:-translate-y-4 rotate-[-40deg] group-hover:rotate-[-50deg]",
                "top-[45%] right-[-5%] group-hover:translate-x-8 md:group-hover:translate-x-12 rotate-[35deg] group-hover:rotate-[45deg]",
                "bottom-[-5%] left-[40%] group-hover:translate-y-8 md:group-hover:translate-y-12 rotate-[5deg] group-hover:rotate-[15deg]"
              ]
            ];

            const [Tooth1, Tooth2, Tooth3] = teethCombos[index % teethCombos.length];
            const [pos1, pos2, pos3] = posCombos[index % posCombos.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer text-center flex flex-col items-center"
              >
                <div className="relative mb-3 md:mb-6 w-full max-w-[150px] sm:max-w-[180px] md:max-w-[280px] aspect-square">
                  
                  {/* Cute Tooth Peek-a-boo Effects */}
                  {/* Tooth 1 */}
                  <div className={`absolute ${pos1} w-12 h-12 md:w-20 md:h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0 pointer-events-none`}>
                    <Tooth1 className="w-full h-full drop-shadow-sm" />
                  </div>

                  {/* Tooth 2 (Delayed) */}
                  <div className={`absolute ${pos2} w-14 h-14 md:w-24 md:h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0 pointer-events-none`}>
                    <Tooth2 className="w-full h-full drop-shadow-sm" />
                  </div>

                  {/* Tooth 3 (More Delayed) */}
                  <div className={`absolute ${pos3} w-10 h-10 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0 pointer-events-none`}>
                     <Tooth3 className="w-full h-full drop-shadow-sm" />
                  </div>

                  {/* Portrait Circle Layer */}
                  <div className="relative w-full h-full aspect-square rounded-full overflow-hidden border-2 md:border-4 border-white shadow-md md:shadow-xl group-hover:border-alere-pink transition-all duration-500 z-10 bg-white">
                    <div className="absolute inset-0 bg-alere-pink/0 group-hover:bg-alere-pink/10 transition-colors duration-500 mix-blend-color-burn z-10 pointer-events-none" />
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-[1.05]"
                    />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2 leading-tight px-1 md:px-2">{person.name}</h3>
                <p className="text-xs sm:text-sm text-alere-plum font-bold md:font-medium uppercase tracking-tight md:tracking-wider leading-relaxed px-1 md:px-4">
                  {person.role}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-12 md:mt-24 flex justify-center"
        >
          <motion.a 
            href="https://wa.me/5567999427984" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(100, 206, 251, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-alere-plum/40 md:from-alere-plum/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center justify-center w-8 h-8 bg-alere-plum md:bg-white/10 rounded-full md:group-hover:bg-alere-plum transition-colors duration-300">
               <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
               </svg>
            </div>

            <span className="relative tracking-wide text-lg text-white">Agendar Consulta Agora</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

