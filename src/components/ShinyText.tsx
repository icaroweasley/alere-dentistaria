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
        className="bg-clip-text text-transparent bg-[linear-gradient(to_right,var(--color-alere-plum),#ffffff,var(--color-alere-pink),var(--color-alere-plum))] bg-[length:200%_auto]"
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
