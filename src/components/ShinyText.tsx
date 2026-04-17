import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  className?: string;
}

const ShinyText = ({ text, className = "" }: ShinyTextProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ backgroundPosition: '-200% 0' }}
        animate={{ backgroundPosition: '200% 0' }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="bg-clip-text text-transparent bg-gradient-to-r from-[#64CEFB] via-white to-[#64CEFB] bg-[length:200%_auto]"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default ShinyText;
