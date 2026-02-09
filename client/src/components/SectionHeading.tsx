import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: "left" | "center";
}

export function SectionHeading({ subtitle, title, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-medium tracking-widest text-sm uppercase block mb-3"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary"
      >
        {title}
      </motion.h2>
    </div>
  );
}
