import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-white pt-12 md:pt-24 pb-4 md:pb-6 overflow-hidden">
      {/* Location Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-24">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center flex flex-col items-center justify-center gap-4 mb-4 md:mb-6"
          >
            <span className="text-lg md:text-2xl font-bold tracking-widest text-slate-500">Alere Dentistaria</span>
            <span className="text-alere-plum font-['Adelia'] text-4xl md:text-6xl font-normal leading-tight drop-shadow-sm px-2">Localização Privilegiada</span>
            <span className="text-sm md:text-xl font-bold tracking-widest text-slate-500 pt-2 md:pt-6">De Fácil Acesso!</span>
          </motion.h2>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="w-full h-[300px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200 border-4 md:border-8 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.2164414086606!2d-54.59742052387195!3d-20.456301554914777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e896c300bddd%3A0xa0f767042c06c6c6!2sDentista%20Campo%20Grande%20MS%20%2F%20Cl%C3%ADnica%2BOdontol%C3%B3gica%2BAlere%2BDentistaria!5e0!3m2!1spt-BR!2sbr!4v1713300000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Alere Dentistaria"
          ></iframe>
        </motion.div>
      </div>

      {/* Contact Cards Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-24 grid grid-cols-3 gap-2 md:gap-8">
        {[
          {
            icon: <Mail className="w-5 h-5 md:w-10 md:h-10" />,
            title: "Email",
            value: "suzimmvendas@gmail.com",
            href: "mailto:suzimmvendas@gmail.com",
            color: "bg-alere-plum"
          },
          {
            icon: <MapPin className="w-5 h-5 md:w-10 md:h-10" />,
            title: "Endereço",
            value: "Rua Alagoas, 396 Edifício Atrium",
            href: "https://maps.google.com/?q=Alere+Dentistaria+Campo+Grande",
            color: "bg-alere-plum"
          },
          {
            icon: <Phone className="w-5 h-5 md:w-10 md:h-10" />,
            title: "WhatsApp",
            value: "(67) 99942-7984",
            href: "https://wa.me/5567999427984",
            color: "bg-[#25D366]"
          }
        ].map((card, index) => (
          <motion.a
            key={index}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center text-center p-3 md:p-12 rounded-[1.5rem] md:rounded-[3.5rem] bg-gray-50/50 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-2xl hover:shadow-gray-200"
          >
            <div className={`p-4 md:p-8 rounded-[1rem] md:rounded-[2rem] ${card.color} text-white mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
              {card.icon}
            </div>
            <h4 className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1 md:mb-2">{card.title}</h4>
            <p className="text-gray-900 font-medium text-[10px] md:text-lg leading-tight lg:px-4 break-all md:break-normal">
              {card.value}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Social Bar */}
      <div className="bg-alere-plum py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight">Siga Nossas Redes !</h3>
          <div className="flex gap-6">
            {[
              { icon: <InstagramSVG />, href: "https://www.instagram.com/aleredentistaria" },
              { icon: <FacebookSVG />, href: "https://www.facebook.com/aleredentistaria" },
              { icon: <YoutubeSVG />, href: "https://www.youtube.com/@aleredentistaria" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-alere-plum transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-6 md:mt-8 mb-4 md:mb-6 flex flex-col items-center text-center text-gray-400 text-xs uppercase tracking-tight">
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
          <p className="font-bold text-gray-500 leading-relaxed max-w-4xl mx-auto">
            ALERE DENTISTARIA LTDA Copyright © 2016/2024 | CNPJ: 26.705.784/0001-47 | Responsável Técnico: Suzi Magali Moura Vendas CRO MS 852
          </p>
          <img src="/logo.png" alt="Alere Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>
      </div>
    </footer>
  );
};

const InstagramSVG = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookSVG = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const YoutubeSVG = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export default FooterSection;

