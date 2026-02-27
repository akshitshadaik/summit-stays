import { motion } from "framer-motion";
import destAlps from "@/assets/dest-alps.jpg";
import destPatagonia from "@/assets/dest-patagonia.jpg";
import destJapan from "@/assets/dest-japan.jpg";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    name: "Swiss Alps",
    tagline: "Timeless Elegance",
    image: destAlps,
    alt: "Luxury chalets in the Swiss Alps at blue hour",
  },
  {
    name: "Patagonia",
    tagline: "Untamed Wilderness",
    image: destPatagonia,
    alt: "Dramatic Patagonian peaks and glacial lake",
  },
  {
    name: "Japanese Highlands",
    tagline: "Sacred Serenity",
    image: destJapan,
    alt: "Mountain temple in misty Japanese highlands",
  },
];

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
          Destinations
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {destinations.map((dest, i) => (
          <motion.div
            key={dest.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={dest.image}
                alt={dest.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
              <div>
                <p className="mb-1 text-xs tracking-[0.2em] text-primary uppercase font-body">
                  {dest.tagline}
                </p>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  {dest.name}
                </h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-foreground/50 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
