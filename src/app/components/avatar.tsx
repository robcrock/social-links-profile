import Image, { StaticImageData } from "next/image";

type TProps = {
  src: StaticImageData;
  alt: string;
};

export const Avatar = ({ src, alt }: TProps) => {
  return (
    <Image className="h-[88px] w-[88px] rounded-full" src={src} alt={alt} />
  );
};
