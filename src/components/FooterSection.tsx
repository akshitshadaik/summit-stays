const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <span className="font-display text-lg tracking-widest text-foreground uppercase">
          Summit
        </span>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground font-body">
          Premium mountain travel experiences crafted for those who seek
          elevation — in every sense.
        </p>
        <p className="text-xs text-muted-foreground/60 font-body">
          © 2026 Summit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
