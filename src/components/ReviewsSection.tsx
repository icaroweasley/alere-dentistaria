import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Sueli Regina Arakaki",
    text: "Eu e minha Família há muitos anos somos pacientes da Dra Suzi e acompanhamos de perto todo o seu trabalho e crescimento corroborado com suas instalações na bela Clínica Alere Dentistaria. Só gratidão por todo o seu trabalho com muita dedicação e muita eficiência.",
    rating: 5,
    tag: "Paciente há anos"
  },
  {
    name: "Simony Coelho",
    text: "Sempre tive muitooo medo de dentistas... Mas quando conheci a Dr. Suzi com toda sua paciência e carinho, fui ficando a cada consulta mais tranquila e confiante... Hoje tenho um sorrisão, minha filha e meu esposo são clientes também.",
    rating: 5,
    tag: "Família completa"
  },
  {
    name: "Vilma Ribeiro",
    text: "Nossa, nem sei que palavras usar para expressar o carinho por esta profissional... que sempre tratou os dentes meus, filhos, maridos, e amigos... sempre realizou os melhores cuidados com nossos 'dentinhos'.",
    rating: 5,
    tag: "Cuidado familiar"
  },
  {
    name: "Letícia Lemes",
    text: "Atendimento nota mil!! Levei minha filha e ela costuma ter medo de dentista, mas ela amou, se sentiu super confortável. A Dra é super atenciosa e querida.",
    rating: 5,
    tag: "Odontopediatria"
  },
  {
    name: "Vivi",
    text: "Melhor consultório odontológico de Campo Grande MS. Atendimento maravilhoso repleto de carinho e cuidado com os pacientes, ambiente acolhedor e com profissionais de excelência!",
    rating: 5,
    tag: "Recomendação"
  }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="depoimentos" className="py-12 md:py-24 px-6 bg-alere-pink/5 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10 md:mb-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div className="space-y-4 text-center w-full md:w-auto flex flex-col items-center">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-alere-plum font-bold tracking-widest text-xs uppercase"
             >
               Depoimentos
             </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="mt-2 text-center flex flex-col items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10"
            >
              <span className="text-lg md:text-2xl font-bold tracking-widest text-slate-500">O Que Dizem Nossos</span>
              <span className="text-alere-plum font-['Adelia'] text-5xl md:text-7xl font-normal leading-tight drop-shadow-sm px-2">Pacientes</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden md:block text-right mr-4">
               <div className="flex gap-1 text-alere-plum justify-end">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
               </div>
               <p className="text-gray-500 mt-1 text-xs">Excedendo expectativas</p>
             </div>
             <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
             </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Mobile View: Single Animated Post-it */}
        <div className="block md:hidden relative h-[520px] px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: currentIndex % 2 === 0 ? -1 : 2 }}
              exit={{ opacity: 0, x: -50, rotate: 0 }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 mx-2 ${['bg-[#fdfbf7]', 'bg-[#fcf5f7]', 'bg-[#f5f7fa]'][currentIndex % 3]} rounded-[1.5rem] p-6 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.15)] border border-gray-100/50 flex flex-col justify-between origin-bottom`}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                   <div className="flex gap-1">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-alere-plum text-alere-plum" />
                      ))}
                   </div>
                   <Quote className="w-10 h-10 text-blue-50/50 fill-current" />
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed italic font-medium">
                  "{reviews[currentIndex].text}"
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-alere-plum text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-alere-plum/20">
                  {reviews[currentIndex].name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {reviews[currentIndex].name}
                  </h4>
                  <span className="text-xs text-alere-plum font-semibold uppercase tracking-wider">{reviews[currentIndex].tag}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop View: Post-It Stack */}
        <div className="hidden md:block relative h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex justify-center items-center"
            >
              {[
                reviews[currentIndex],
                reviews[(currentIndex + 1) % reviews.length],
                reviews[(currentIndex + 2) % reviews.length]
              ].map((review, i) => {
                 const pastelColors = ['bg-[#fdfbf7]', 'bg-[#fcf5f7]', 'bg-[#f5f7fa]'];
                 const rotations = ['-rotate-3', 'rotate-1', 'rotate-3'];
                 const zIndex = i === 0 ? 'z-10' : i === 1 ? 'z-20' : 'z-30';
                 const overlap = i === 0 ? '' : '-ml-16 lg:-ml-20'; 
                 return (
                    <div key={`${currentIndex}-${i}`} className={`w-[320px] lg:w-[380px] h-[360px] lg:h-[380px] flex flex-col justify-between p-8 rounded-lg shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] border border-gray-100/50 ${zIndex} ${overlap} ${pastelColors[i]} ${rotations[i]} transition-transform hover:scale-105 hover:z-40 duration-300`}>
                      <div className="space-y-4 text-left">
                        <div className="flex justify-between items-start">
                           <div className="flex gap-1">
                              {[...Array(review.rating)].map((_, idx) => (
                                <Star key={idx} className="w-4 h-4 fill-alere-plum text-alere-plum" />
                              ))}
                           </div>
                           <Quote className="w-8 h-8 text-black/5 fill-current" />
                        </div>
                        
                        <p className="text-gray-700 text-sm lg:text-base leading-relaxed italic font-medium line-clamp-6">
                           "{review.text}"
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-black/5 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-alere-plum text-white flex items-center justify-center font-bold text-sm shadow-sm">
                          {review.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-gray-900 text-sm leading-tight">
                            {review.name}
                          </h4>
                          <span className="text-[10px] text-alere-plum font-semibold uppercase tracking-wider">{review.tag}</span>
                        </div>
                      </div>
                    </div>
                 )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${currentIndex === index ? 'w-8 bg-alere-plum' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

