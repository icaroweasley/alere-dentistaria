import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ShinyText from './ShinyText';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    if (videoRef.current) {
      // Começar o vídeo a partir do segundo 2
      videoRef.current.currentTime = 2;
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-white">
      {/* Parallax Video Container */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="/no_watermark_Vídeo_de_Dente_de_Porcelana_D.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
      
      {/* Dark Overlay for cinematic effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-7xl h-full flex flex-col justify-between px-6 pt-24 md:pt-32 pb-8 md:pb-12">
        {/* Top Info Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-white/80 text-sm md:text-base leading-relaxed"
          >
            Com mais de 40 anos de tradição, entregamos sorrisos saudáveis e radiantes com tecnologia de ponta e cuidado humanizado em Campo Grande.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:text-right"
          >
            <p className="text-white font-semibold text-lg">8000+</p>
            <p className="text-white/60 text-sm">Vidas Transformadas!</p>
          </motion.div>
        </div>

        {/* Main Hero Text */}
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60 mb-6 font-medium"
          >
            Excelência Odontológica em Campo Grande MS
          </motion.span>
          
          <h1 className="flex flex-col text-5xl md:text-8xl lg:text-[10rem] font-medium leading-[0.85] tracking-tighter text-white">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transforme
            </motion.span>
            <ShinyText 
              text="Seu Sorriso." 
              className="mt-2"
            />
          </h1>

          <motion.a
            href="https://wa.me/5567999427984?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Alere%20Dentistaria."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.9, duration: 0.5 } }}
            transition={{ duration: 0.05 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.05 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
            className="mt-12 group flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-75 shadow-2xl shadow-black/20"
          >
            Agende sua Avaliação
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-75" />
          </motion.a>
        </div>

        {/* Bottom Scroll Indicator / Status */}
        <div className="flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
