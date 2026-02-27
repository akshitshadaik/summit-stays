import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import destManali from "@/assets/dest-manali.jpg";
import destSpiti from "@/assets/dest-spiti.jpg";
import destShimla from "@/assets/dest-shimla.jpg";
import destKasol from "@/assets/dest-kasol.jpg";
import { ArrowUpRight, MapPin, Thermometer, MountainSnow } from "lucide-react";

const destinations = [
  {
    name: "Manali",
    tagline: "Valley of the Gods",
    description: "Snow-capped peaks, ancient temples, and adventure sports in the heart of Kullu Valley.",
    image: destManali,
    alt: "Old Manali town with Himalayan mountains",
    elevation: "2,050m",
    bestTime: "Oct – Feb",
  },
  {
    name: "Spiti Valley",
    tagline: "The Middle Land",
    description: "A cold desert mountain valley with Buddhist monasteries perched on dramatic cliffs.",
    image: destSpiti,
    alt: "Spiti Valley monastery on cliff with turquoise river",
    elevation: "3,800m",
    bestTime: "Jun – Sep",
  },
  {
    name: "Shimla",
    tagline: "Queen of Hills",
    description: "Colonial charm meets Himalayan grandeur in this iconic hill station.",
    image: destShimla,
    alt: "Panoramic view of Shimla hill station",
    elevation: "2,276m",
    bestTime: "Mar – Jun",
  },
];

const DestinationCard = ({
  dest,
  index,
}: {
  dest: (typeof destinations)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-lg"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <motion.img
          src={dest.image}
          alt={dest.alt}
          className="h-full w-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.div
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="mb-1 text-xs tracking-[0.2em] text-primary uppercase font-body">
            {dest.tagline}
          </p>
          <h3 className="font-display text-3xl font-medium text-foreground">
            {dest.name}
          </h3>
        </motion.div>

        {/* Expandable details */}
        <motion.div
          initial={false}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="mt-3 text-sm leading-relaxed text-foreground/60 font-body">
            {dest.description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-foreground/40 font-body">
            <span className="flex items-center gap-1">
              <MountainSnow className="h-3 w-3" />
              {dest.elevation}
            </span>
            <span className="flex items-center gap-1">
              <Thermometer className="h-3 w-3" />
              {dest.bestTime}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-primary font-body">
            <span>Explore</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </motion.div>
      </div>

      {/* Map pin indicator */}
      <motion.div
        className="absolute right-4 top-4"
        animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <MapPin className="h-5 w-5 text-primary" />
      </motion.div>
    </motion.div>
  );
};

const FullWidthBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative mt-12 h-[50vh] overflow-hidden rounded-lg"
    >
      <motion.img
        src={destKasol}
        alt="Parvati Valley in Kasol, Himachal Pradesh"
        className="h-full w-full object-cover"
        style={{ y }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.3em] text-primary uppercase font-body"
        >
          Parvati Valley
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2 font-display text-4xl font-medium text-foreground md:text-6xl"
        >
          Where rivers whisper
        </motion.h3>
      </div>
    </motion.div>
  );
};

const DestinationsSection = () => {
  return (
    <section id="destinations" className="px-6 py-24 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="mb-3 text-sm tracking-[0.3em] text-primary uppercase font-body">
          Curated Journeys
        </p>
        <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Explore Himachal
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {destinations.map((dest, i) => (
          <DestinationCard key={dest.name} dest={dest} index={i} />
        ))}
      </div>

      <FullWidthBanner />
    </section>
  );
};

export default DestinationsSection;
