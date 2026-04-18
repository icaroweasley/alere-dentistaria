import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

const services = [
  { 
    name: 'Ortodontia', 
    img: '/services/orthodontics.png', 
    desc: 'Aparelhos invisíveis e convencionais.',
    fullDesc: 'Correção do alinhamento dentário e da mandíbula para um sorriso harmonioso e funcional. Utilizamos as tecnologias mais modernas, desde aparelhos convencionais até alinhadores invisíveis, garantindo conforto e rapidez em cada etapa do seu tratamento.'
  },
  { 
    name: 'Implantes', 
    img: '/services/implants.png', 
    desc: 'Reabilitação oral de alta precisão.',
    fullDesc: 'A solução definitiva para a perda de dentes. Utilizamos parafusos de titânio de alta tecnologia que se integram ao osso, servindo como raiz para novas coroas, devolvendo a estética natural e a capacidade de mastigação completa com total segurança.'
  },
  { 
    name: 'Protocolo', 
    img: '/services/protocol.png', 
    desc: 'Próteses fixas sobre implantes.',
    fullDesc: 'Reabilitação total para pacientes que perderam todos os dentes de uma arcada. Consiste em uma prótese fixa sobre quatro ou mais implantes, oferecendo estabilidade total, conforto e a segurança de um sorriso fixo novamente, eliminando a necessidade de próteses móveis.'
  },
  { 
    name: 'Lentes de Contato', 
    img: '/services/veneers.png', 
    desc: 'Lâminas ultrafinas de porcelana.',
    fullDesc: 'O segredo dos sorrisos perfeitos. Lâminas de porcelana ultrafinas que corrigem cor, forma e espaçamento, proporcionando uma transformação estética imediata e duradoura com o mínimo de desgaste dentário.'
  },
  { 
    name: 'Clareamento', 
    img: '/services/whitening.png', 
    desc: 'Laser e caseiro para brilho máximo.',
    fullDesc: 'Devolva o brilho natural ao seu sorriso. Oferecemos clareamento a laser em consultório e kits personalizados para uso caseiro, ambos com supervisão profissional para garantir resultados rápidos, duradouros e sem causar sensibilidade.'
  },
  { 
    name: 'Cirurgia', 
    img: '/services/surgery.png', 
    desc: 'Procedimentos orais especializados.',
    fullDesc: 'Procedimentos cirúrgicos realizados com precisão técnica e cuidado humanizado. Desde extrações simples até cirurgias complexas de dentes siso e enxertos ósseos, priorizando sempre o seu conforto e um pós-operatório tranquilo.'
  },
  { 
    name: 'Tratamento de Canal', 
    img: '/services/root_canal.png', 
    desc: 'Endodontia moderna e indolor.',
    fullDesc: 'Tratamento preciso para preservar o seu dente natural. Utilizamos tecnologia rotatória avançada para remover infecções da polpa dentária de forma rápida, segura e, acima de tudo, indolor, salvando dentes que de outra forma seriam perdidos.'
  },
  { 
    name: 'Clínico Geral', 
    img: '/services/pediatrics.png', 
    desc: 'Cuidado completo para sua saúde bucal.',
    fullDesc: 'Prevenção e tratamento das doenças bucais mais comuns. Nosso foco é manter sua saúde em dia através de avaliações regulares, limpezas básicas e diagnósticos precoces, garantindo um sorriso saudável por toda a vida.'
  },
  { 
    name: 'Dentaduras', 
    img: '/services/dentures.png', 
    desc: 'Próteses removíveis com conforto.',
    fullDesc: 'Reabilitação através de próteses removíveis de alta qualidade. Nosso foco é o ajuste perfeito e a naturalidade estética, devolvendo a autoestima do paciente e a função mastigatória de forma acessível e extremamente confortável.'
  },
  { 
    name: 'Bruxismo', 
    img: '/services/bruxism.png', 
    desc: 'Placas e tratamentos de ATM.',
    fullDesc: 'Tratamento especializado para o apertamento e ranger de dentes. Confeccionamos placas miorrelaxantes personalizadas para aliviar dores de cabeça, tensões musculares faciais e proteger o esmalte dentário contra o desgaste excessivo.'
  },
  { 
    name: 'Prótese Fixa', 
    img: '/services/fixed_prosthesis.png', 
    desc: 'Coroas e pontes duradouras.',
    fullDesc: 'Restauração vital da forma e função de dentes severamente danificados. Através de coroas e pontes em porcelana pura ou zircônia, recriamos a estrutura dentária com máxima naturalidade visual e resistência a longo prazo.'
  },
  { 
    name: 'Pré-Natal Odontológico', 
    img: '/services/prenatal.png', 
    desc: 'Cuidado especializado para gestantes.',
    fullDesc: 'Cuidado fundamental para a saúde da mãe e do bebê. Orientamos e tratamos gestantes para prevenir inflamações que podem impactar na gestação, garantindo que o início da vida do seu filho seja marcado por saúde e bem-estar.'
  },
  { 
    name: 'Atendimento Infantil', 
    img: '/services/pediatrics.png', 
    desc: 'Odontopediatria humanizada.',
    fullDesc: 'Sua primeira experiência positiva com o dentista começa aqui. Nossa odontopediatria foca no acolhimento lúdico, criando um ambiente divertido para que a criança desenvolva hábitos saudáveis para toda a vida sem traumas.'
  },
  { 
    name: 'Prevenção Infantil', 
    img: '/services/pediatric_prevention.png', 
    desc: 'Programa de saúde para crianças.',
    fullDesc: 'Um programa de acompanhamento focado em manter as cáries longe. Através de profilaxias periódicas, selantes e educação em higiene bucal, garantimos o crescimento de um sorriso infantil forte, protegido e sempre radiante.'
  },
  { 
    name: 'Limpeza e Profilaxia', 
    img: '/services/cleaning.png', 
    desc: 'Saúde gengival e remoção de tártaro.',
    fullDesc: 'Higienização profissional detalhada para garantir hálito fresco e gengivas saudáveis. Removemos tártaro e manchas superficiais com ultrassom, prevenindo doenças gengivais graves e mantendo a longevidade dos seus dentes.'
  },
  { 
    name: 'Consulta Odontológica', 
    img: '/services/clinic.png', 
    desc: 'Avaliação completa e plano de tratamento.',
    fullDesc: 'O primeiro passo para o seu novo sorriso. Realizamos uma avaliação detalhada da sua saúde bucal, utilizando diagnósticos precisos para criar um plano de tratamento personalizado, focado nas suas necessidades e objetivos estéticos.'
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="servicos" className="py-12 md:py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center flex flex-col items-center justify-center gap-2 mb-8 md:mb-12"
          >
            <span className="text-lg md:text-2xl font-bold tracking-widest text-slate-500">Nossas</span>
            <span className="text-alere-plum font-['Adelia'] text-5xl md:text-7xl font-normal leading-tight drop-shadow-sm px-2">Especialidades</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false }}
            className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg"
          >
            Toque em um procedimento para saber mais sobre como cuidamos do seu sorriso.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -8 }}
               onClick={() => setSelectedService(service)}
               className="group p-4 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-alere-pink/5 border border-alere-pink/10 hover:bg-white hover:border-alere-plum/20 transition-all duration-500 hover:shadow-2xl hover:shadow-alere-plum/5 flex flex-row md:flex-col items-center gap-4 md:gap-0 cursor-pointer text-left md:text-center w-full"
             >
               <div className="w-16 h-16 md:w-28 md:h-28 flex-shrink-0 rounded-[1rem] md:rounded-[2rem] bg-white shadow-md md:shadow-xl flex items-center justify-center mb-0 md:mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 overflow-hidden ring-1 ring-gray-100">
                <img 
                  src={service.img} 
                  alt={service.name}
                  className="w-full h-full object-cover scale-[1.3] md:scale-[1.75]"
                />
              </div>

              <div className="flex-1 flex items-center justify-between md:block">
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-0 md:mb-3 leading-tight">
                    {service.name}
                  </h3>
                  <p className="hidden md:block text-sm md:text-base text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <ChevronRight className="md:hidden w-5 h-5 text-alere-plum opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="hidden md:flex mt-6 text-alere-plum text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity items-center gap-2">
                Ver detalhes 
                <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-[1.5rem] md:rounded-[2rem] bg-gray-50 flex items-center justify-center overflow-hidden ring-4 ring-gray-50 shadow-inner">
                  <img 
                    src={selectedService.img} 
                    alt={selectedService.name}
                    className="w-full h-full object-cover scale-150"
                  />
                </div>
                
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                    {selectedService.name}
                  </h3>
                  <div className="h-1 w-16 md:w-20 bg-alere-plum mx-auto rounded-full" />
                </div>

                <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                  {selectedService.fullDesc}
                </p>

                <button 
                  onClick={() => setSelectedService(null)}
                  className="mt-8 px-10 py-4 bg-alere-plum text-white rounded-full font-bold hover:bg-alere-pink transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-alere-plum/20"
                >
                  Entendi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default ServicesSection;

