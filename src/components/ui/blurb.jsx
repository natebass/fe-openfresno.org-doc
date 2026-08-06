import Image from "next/image";

/**
 * Displays content centered over a Next.js image.
 * @param {object} props - Component props.
 * @param {import("next/image").StaticImageData|string} props.src - Image source.
 * @param {string} [props.alt="rectangle"] - Image alternative text.
 * @param {"left"|"right"|"center"} [props.float="left"] - Alignment of the image wrapper.
 * @param {number} [props.width] - Rendered image width.
 * @param {number} [props.height] - Rendered image height.
 * @param {React.ReactNode} [props.children] - Overlay content.
 * @returns {React.JSX.Element} The image and centered overlay.
 */
export default function Blurb({
  src,
  alt = "rectangle",
  float = "left",
  width,
  height,
  children = <></>,
}) {
  return (
    <div className={`relative w-fit ${float === "center" ? "mx-auto" : `float-${float}`}`}>
      <Image src={src} alt={alt} width={width} height={height} className="object-cover" />
      {/*used to place the text over the image*/}
      <div className={`absolute bottom-0 h-full w-full`}>
        {/*used to vertically center the text over the image*/}
        <div className={`flex h-full w-full items-center justify-center`}>
          {/*used to horizontally center the text over the image*/}
          {children}
        </div>
      </div>
    </div>
  );
}
