import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  caption?: { name: string; role: string };
  className?: string;
  priority?: boolean;
};

export default function PortraitFrame({ src, alt, caption, className = "", priority = false }: Props) {
  return (
    <div className={`relative overflow-hidden border border-stone-line bg-ivory-dim ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,rgba(21,19,15,0.05)_10px,rgba(21,19,15,0.05)_11px)]">
          <span className="font-display text-[11px] tracking-widest2 uppercase text-ink-soft">
            Portrait placeholder
          </span>
          <span className="font-body text-xs text-ink-soft/70 max-w-[220px] text-center">
            Replace with an editorial photograph — drop the file into /public/images
          </span>
        </div>
      )}
      {caption && (
        <div className="absolute left-0 right-0 bottom-0 flex items-center justify-between bg-ink/90 px-4 py-2.5 backdrop-blur-sm">
          <span className="font-display text-[10px] sm:text-[11px] tracking-widest2 uppercase text-ivory">
            {caption.name}
          </span>
          <span className="font-display text-[10px] sm:text-[11px] tracking-widest2 uppercase text-ivory/70">
            {caption.role}
          </span>
        </div>
      )}
    </div>
  );
}
