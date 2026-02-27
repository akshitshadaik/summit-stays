import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          <div>
            <p className="mb-3 text-sm tracking-[0.3em] text-primary uppercase font-body">
              Our Philosophy
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
              Rooted in
              <br />
              <em>Himachal</em>
            </h2>
          </div>
          <div className="space-y-5 font-body text-base leading-relaxed text-muted-foreground">
            <p>
              Born in the valleys of Himachal, we craft journeys that go beyond tourism.
              Every trek, every stay, every meal is an invitation to experience
              the soul of these ancient mountains.
            </p>
            <p>
              Our local guides are from the villages they lead you through —
              because the best stories come from those who call these peaks home.
            </p>
          </div>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4"
        >
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
              <p className="mt-1 text-xs tracking-[0.15em] text-muted-foreground uppercase font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
