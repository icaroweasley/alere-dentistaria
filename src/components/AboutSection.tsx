import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-12 md:py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start w-full">
              <h2 className="flex flex-col items-center md:items-start w-full gap-4">
                <div className="flex flex-row items-center justify-center md:justify-start gap-3 md:gap-6">
                  <span className="text-alere-plum font-['Adelia'] text-[6rem] md:text-[8rem] leading-none drop-shadow-sm pt-4 md:pt-0">40</span>
                  <div className="flex flex-col items-start gap-1 md:gap-2">
                    <span className="text-sm md:text-2xl font-medium text-slate-500 tracking-wide mt-2 md:mt-0">Uma Trajetória De</span>
                    <span className="text-alere-plum font-['Adelia'] text-[3.5rem] md:text-7xl leading-[0.8] md:leading-none drop-shadow-sm">anos</span>
                  </div>
                </div>
                <div className="w-full text-center md:text-left mt-2 md:mt-4">
                  <span className="text-xl md:text-3xl font-semibold text-slate-800 tracking-tight">Dedicada À Excelência.</span>
                </div>
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Somos uma clínica multidisciplinar focada no atendimento humanizado e acolhedor. Nossa missão é oferecer o que há de mais moderno na odontologia, priorizando o seu conforto e bem-estar em um ambiente moderno e equipado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-alere-pink/10 rounded-2xl text-alere-pink">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Multidisciplinar</h4>
                <p className="text-sm text-gray-500">Especialistas em todas as áreas em um só lugar.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-alere-plum/10 rounded-2xl text-alere-plum">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">40+ Anos</h4>
                <p className="text-sm text-gray-500">Tradição que garante confiança e segurança.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="flex flex-col gap-4 lg:gap-0"
        >
          <div className="relative aspect-video lg:aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-alere-plum/20 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
              alt="Consultório Moderno"
              className="w-full h-full object-cover"
            />
            {/* Desktop Overlay */}
            <div className="hidden md:block absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
              <p className="text-gray-900 font-medium text-lg">Equipamentos de última geração para o diagnóstico preciso e tratamentos indolores.</p>
            </div>
          </div>

          {/* Mobile Text Below Image */}
          <div className="md:hidden bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
            <p className="text-gray-900 font-medium text-center leading-relaxed">Equipamentos de última geração para o diagnóstico preciso e tratamentos indolores.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

