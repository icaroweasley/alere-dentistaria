import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-12 md:py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
              Uma trajetória de <span className="text-medical-blue">40 anos</span> dedicada à excelência.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Somos uma clínica multidisciplinar focada no atendimento humanizado e acolhedor. Nossa missão é oferecer o que há de mais moderno na odontologia, priorizando o seu conforto e bem-estar em um ambiente moderno e equipado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-medical-blue/10 rounded-2xl text-medical-blue">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Multidisciplinar</h4>
                <p className="text-sm text-gray-500">Especialistas em todas as áreas em um só lugar.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-medical-blue/10 rounded-2xl text-medical-blue">
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
          viewport={{ once: true }}
          className="relative aspect-video lg:aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-medical-blue/20 to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
            alt="Consultório Moderno"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p className="text-gray-900 font-medium">Equipamentos de última geração para o diagnóstico preciso e tratamentos indolores.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
