import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-himachal.jpg";
import { ArrowDown, Mountain } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[120vh] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img
          src={heroImage}
          alt="Himachal Pradesh Himalayan valley at golden hour"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/10 to-background" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-screen flex-col justify-between px-6 py-8 md:px-16 lg:px-24"
      >
        {/* Nav */}
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <Mountain className="h-5 w-5 text-primary" />
            <span className="font-display text-xl tracking-widest text-foreground uppercase">
              Himachal Heights
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden items-center gap-10 text-sm font-body tracking-wider text-foreground/70 md:flex"
          >
            {["Destinations", "Experiences", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="story-link transition-colors hover:text-primary"
              >
                <span>{item}</span>
              </a>
            ))}
          </motion.div>
        </nav>

        {/* Hero text */}
        <div className="mb-32 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 text-sm tracking-[0.3em] text-primary uppercase font-body"
          >
            Himachal Pradesh · Dev Bhoomi
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-[6.5rem]"
          >
            Land of the
            <br />
            <em className="text-primary">eternal</em>
            <br />
            mountains
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 max-w-md text-base leading-relaxed text-foreground/60 font-body"
          >
            Journey through snow-capped Himalayas, ancient temples, and valleys
            that take your breath away.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-foreground/30 uppercase font-body">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-foreground/30" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
