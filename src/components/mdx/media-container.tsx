/* eslint-disable @next/next/no-img-element */

interface MediaContainerProps {
  src: string;
  alt?: string;
  type?: "image" | "video";
  className?: string;
  fit?: "cover" | "contain";
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
}

export function MediaContainer({
  src,
  alt = "",
  type = "image",
  className = "",
  fit = "cover",
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  poster,
}: MediaContainerProps) {
  const contain = fit === "contain";
  const containerHeight = contain ? "" : "h-[300px]";
  const mediaFit = contain
    ? "w-full h-auto"
    : "w-full h-full object-cover object-center max-w-full max-h-full";

  return (
    <div
      className={`ring-4 ring-muted w-full ${containerHeight} rounded-lg overflow-hidden flex items-center justify-center ${className}`}
    >
      {type === "image" ? (
        <img src={src} alt={alt} className={mediaFit} />
      ) : (
        <video
          src={src}
          className={mediaFit}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          controls={controls}
        />
      )}
    </div>
  );
}
