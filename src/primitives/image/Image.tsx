type ImageVariant = "default" | "hero" | "eager";

type ImageProps = {
  src: string;
  alt: string;

  width?: number;
  height?: number;

  className?: string;

  variant?: ImageVariant;
};

const Image = ({
  src,
  alt,
  width,
  height,
  className = "",
  variant = "default",
}: ImageProps) => {
  const loading = variant === "hero" || variant === "eager" ? "eager" : "lazy";

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      className={className}
    />
  );
};

export default Image;
