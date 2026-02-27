import { motion } from "framer-motion";
import heroImage from "@/assets/hero-mountain.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dramatic mountain peaks at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 md:px-16 lg:px-24">
        {/* Nav */}
        <nav className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-xl tracking-widest text-foreground uppercase"
          >
            Summit
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden items-center gap-10 text-sm font-body tracking-wider text-foreground/70 md:flex"
          >
            <a href="#destinations" className="transition-colors hover:text-primary">Destinations</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </motion.div>
        </nav>

        {/* Hero text */}
        <div className="mb-32 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 text-sm tracking-[0.3em] text-primary uppercase font-body"
          >
            Premium Mountain Experiences
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-5xl font-medium leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Where the
            <br />
            <em className="text-primary">earth</em> meets
            <br />
            the sky
          </motion.h1>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
