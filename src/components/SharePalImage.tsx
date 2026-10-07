import Image, { type ImageProps } from "next/image";

/** Vercel's image optimizer can 502 on some SharePal CDN paths — load those directly. */
export function SharePalImage({
  src,
  alt,
  unoptimized,
  ...props
}: ImageProps) {
  const srcString = typeof src === "string" ? src : "";
  const useUnoptimized =
    unoptimized ?? srcString.includes("images.sharepal.in");

  return (
    <Image src={src} alt={alt} unoptimized={useUnoptimized} {...props} />
  );
}
