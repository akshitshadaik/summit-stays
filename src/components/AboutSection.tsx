import { motion } from "framer-motion";

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
              Travel as
              <br />
              <em>transformation</em>
            </h2>
          </div>
          <div className="space-y-5 font-body text-base leading-relaxed text-muted-foreground">
            <p>
              We believe the mountains offer more than scenery — they offer
              perspective. Each journey is crafted to immerse you in landscapes
              that shift how you see the world.
            </p>
            <p>
              With decades of experience and a network of local guides, we design
              intimate expeditions that balance luxury with authenticity.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-12"
        >
          {[
            { value: "12+", label: "Years" },
            { value: "40+", label: "Destinations" },
            { value: "2K+", label: "Travelers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-medium text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground uppercase font-body">
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
