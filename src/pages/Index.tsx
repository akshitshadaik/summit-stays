import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowDown, Mountain, ArrowUpRight, MapPin, Thermometer, MountainSnow, Compass, TreePine, Tent, Camera } from "lucide-react";
import heroImage from "@/assets/hero-himachal.jpg";
import destManali from "@/assets/dest-manali.jpg";
import destSpiti from "@/assets/dest-spiti.jpg";
import destShimla from "@/assets/dest-shimla.jpg";
import destKasol from "@/assets/dest-kasol.jpg";

/* ─── Hero ─── */

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

/* ─── Destinations ─── */

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

const DestinationCard = ({ dest, index }: { dest: (typeof destinations)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
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
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.div
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="mb-1 text-xs tracking-[0.2em] text-primary uppercase font-body">
            {dest.tagline}
          </p>
          <h3 className="font-display text-3xl font-medium text-foreground">{dest.name}</h3>
        </motion.div>
        <motion.div
          initial={false}
          animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="mt-3 text-sm leading-relaxed text-foreground/60 font-body">{dest.description}</p>
          <div className="mt-4 flex items-center gap-4 text-xs text-foreground/40 font-body">
            <span className="flex items-center gap-1"><MountainSnow className="h-3 w-3" />{dest.elevation}</span>
            <span className="flex items-center gap-1"><Thermometer className="h-3 w-3" />{dest.bestTime}</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-primary font-body">
            <span>Explore</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </motion.div>
      </div>
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
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
      <motion.img src={destKasol} alt="Parvati Valley in Kasol, Himachal Pradesh" className="h-full w-full object-cover" style={{ y }} loading="lazy" />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-sm tracking-[0.3em] text-primary uppercase font-body">Parvati Valley</motion.p>
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-2 font-display text-4xl font-medium text-foreground md:text-6xl">Where rivers whisper</motion.h3>
      </div>
    </motion.div>
  );
};

const DestinationsSection = () => (
  <section id="destinations" className="px-6 py-24 md:px-16 lg:px-24">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mb-16">
      <p className="mb-3 text-sm tracking-[0.3em] text-primary uppercase font-body">Curated Journeys</p>
      <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">Explore Himachal</h2>
    </motion.div>
    <div className="grid gap-6 md:grid-cols-3">
      {destinations.map((dest, i) => (
        <DestinationCard key={dest.name} dest={dest} index={i} />
      ))}
    </div>
    <FullWidthBanner />
  </section>
);

/* ─── Experiences ─── */

const experiencesList = [
  { icon: Compass, title: "Guided Treks", description: "Multi-day treks through Hampta Pass, Triund, and Chandrakhani with expert local guides." },
  { icon: TreePine, title: "Forest Retreats", description: "Disconnect in secluded cedar and deodar forest stays with panoramic mountain views." },
  { icon: Tent, title: "Luxury Camping", description: "Glamping at 10,000ft under stars — complete with gourmet Himachali cuisine." },
  { icon: Camera, title: "Photography Tours", description: "Capture golden hour at Rohtang, Key Monastery, and the Parvati Valley." },
];

const ExperienceCard = ({ exp, index }: { exp: (typeof experiencesList)[0]; index: number }) => {
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
      <motion.div animate={{ rotate: hovered ? 10 : 0, scale: hovered ? 1.1 : 1 }} transition={{ duration: 0.3 }} className="mb-5 inline-flex rounded-md bg-secondary p-3">
        <Icon className="h-6 w-6 text-primary" />
      </motion.div>
      <h3 className="mb-2 font-display text-xl font-medium text-foreground">{exp.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground font-body">{exp.description}</p>
      <motion.div className="absolute bottom-0 left-0 h-[2px] bg-primary" initial={{ width: "0%" }} animate={{ width: hovered ? "100%" : "0%" }} transition={{ duration: 0.4, ease: "easeOut" }} />
    </motion.div>
  );
};

const ExperiencesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="experiences" ref={ref} className="px-6 py-24 md:px-16 lg:px-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 text-center">
        <p className="mb-3 text-sm tracking-[0.3em] text-primary uppercase font-body">What Awaits</p>
        <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">Immersive Experiences</h2>
      </motion.div>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {experiencesList.map((exp, i) => (
          <ExperienceCard key={exp.title} exp={exp} index={i} />
        ))}
      </div>
      <motion.div style={{ x }} className="mt-24 overflow-hidden whitespace-nowrap border-y border-border py-6">
        <span className="font-display text-5xl tracking-wide text-foreground/5 md:text-7xl">
          Manali · Spiti · Shimla · Kasol · Dharamshala · Bir Billing · Tirthan · Kinnaur · Chamba ·&nbsp;
        </span>
      </motion.div>
    </section>
  );
};

/* ─── About ─── */

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const AboutSection = () => (
  <section id="about" className="px-6 py-24 md:px-16 lg:px-24">
    <div className="mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm tracking-[0.3em] text-primary uppercase font-body">Our Philosophy</p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
            Rooted in<br /><em>Himachal</em>
          </h2>
        </div>
        <div className="space-y-5 font-body text-base leading-relaxed text-muted-foreground">
          <p>Born in the valleys of Himachal, we craft journeys that go beyond tourism. Every trek, every stay, every meal is an invitation to experience the soul of these ancient mountains.</p>
          <p>Our local guides are from the villages they lead you through — because the best stories come from those who call these peaks home.</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4">
        {[
          { value: 8, suffix: "+", label: "Years in Himachal" },
          { value: 25, suffix: "+", label: "Destinations" },
          { value: 3000, suffix: "+", label: "Happy Travelers" },
          { value: 15000, suffix: "ft", label: "Highest Trek" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-medium text-primary md:text-4xl">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs tracking-[0.15em] text-muted-foreground uppercase font-body">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── Footer ─── */

const FooterSection = () => (
  <footer id="contact" className="border-t border-border px-6 py-16 md:px-16 lg:px-24">
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
      <div className="flex items-center gap-2">
        <Mountain className="h-4 w-4 text-primary" />
        <span className="font-display text-lg tracking-widest text-foreground uppercase">Himachal Heights</span>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground font-body">Premium Himachal travel experiences for those who seek elevation, serenity, and the raw beauty of the Indian Himalayas.</p>
      <p className="text-xs text-muted-foreground/60 font-body">© 2026 Himachal Heights. Crafted with ❤️ in the mountains.</p>
    </div>
  </footer>
);

/* ─── Page ─── */

const Index = () => (
  <main className="min-h-screen bg-background">
    <HeroSection />
    <DestinationsSection />
    <ExperiencesSection />
    <AboutSection />
    <FooterSection />
  </main>
);

export default Index;
