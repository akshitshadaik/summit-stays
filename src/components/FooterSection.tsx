import { Mountain } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2">
          <Mountain className="h-4 w-4 text-primary" />
          <span className="font-display text-lg tracking-widest text-foreground uppercase">
            Himachal Heights
          </span>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground font-body">
          Premium Himachal travel experiences for those who seek elevation,
          serenity, and the raw beauty of the Indian Himalayas.
        </p>
        <p className="text-xs text-muted-foreground/60 font-body">
          © 2026 Himachal Heights. Crafted with ❤️ in the mountains.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
