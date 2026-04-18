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
    <section id="depoimentos" className="py-12 md:py-24 px-6 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10 md:mb-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 text-center md:text-left">
             <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-medical-blue font-bold tracking-widest text-xs uppercase"
             >
               Depoimentos
             </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900"
            >
              O que dizem nossos <br /> <span className="text-medical-blue italic">pacientes</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden md:block text-right mr-4">
               <div className="flex gap-1 text-medical-blue justify-end">
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
        <div className="relative h-[480px] md:h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
               className="absolute inset-0 bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-14 shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                   <div className="flex gap-1">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-medical-blue text-medical-blue" />
                      ))}
                   </div>
                   <Quote className="w-12 h-12 text-blue-50/50 fill-current" />
                </div>
                
                <p className="text-gray-700 text-lg md:text-2xl leading-relaxed italic font-medium">
                  "{reviews[currentIndex].text}"
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-medical-blue text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-medical-blue/20">
                  {reviews[currentIndex].name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {reviews[currentIndex].name}
                  </h4>
                  <span className="text-sm text-medical-blue font-semibold uppercase tracking-wider">{reviews[currentIndex].tag}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${currentIndex === index ? 'w-8 bg-medical-blue' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
