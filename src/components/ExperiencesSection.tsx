import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Compass, TreePine, Tent, Camera } from "lucide-react";

const experiences = [
  {
    icon: Compass,
    title: "Guided Treks",
    description: "Multi-day treks through Hampta Pass, Triund, and Chandrakhani with expert local guides.",
  },
  {
    icon: TreePine,
    title: "Forest Retreats",
    description: "Disconnect in secluded cedar and deodar forest stays with panoramic mountain views.",
  },
  {
    icon: Tent,
    title: "Luxury Camping",
    description: "Glamping at 10,000ft under stars — complete with gourmet Himachali cuisine.",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture golden hour at Rohtang, Key Monastery, and the Parvati Valley.",
  },
];

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = exp.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/30"
    >
      <motion.div
        animate={{ rotate: hovered ? 10 : 0, scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
        className="mb-5 inline-flex rounded-md bg-secondary p-3"
      >
        <Icon className="h-6 w-6 text-primary" />
      </motion.div>
      <h3 className="mb-2 font-display text-xl font-medium text-foreground">
        {exp.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground font-body">
        {exp.description}
      </p>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
};

const ExperiencesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="experiences" ref={ref} className="px-6 py-24 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="mb-3 text-sm tracking-[0.3em] text-primary uppercase font-body">
          What Awaits
        </p>
        <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Immersive Experiences
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.title} exp={exp} index={i} />
        ))}
      </div>

      {/* Parallax text strip */}
      <motion.div
        style={{ x }}
        className="mt-24 overflow-hidden whitespace-nowrap border-y border-border py-6"
      >
        <span className="font-display text-5xl tracking-wide text-foreground/5 md:text-7xl">
          Manali · Spiti · Shimla · Kasol · Dharamshala · Bir Billing · Tirthan · Kinnaur · Chamba ·&nbsp;
        </span>
      </motion.div>
    </section>
  );
};

export default ExperiencesSection;
