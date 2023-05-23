import React from "react";
import Image from "next/image";

interface ImageProps {
  imgSrc: string;
}

const Recomedation = async ({ imgSrc }: ImageProps) => {
  const random = Math.floor(Math.random() * 5 + 5) * 1000;
  await new Promise((resolve) => setTimeout(resolve, random));
  return (
    <div className="relative aspect-square">
      <Image
        src={imgSrc}
        alt="recomedation"
        fill
        className="object-cover rounded-sm"
      />
    </div>
  );
};

export default Recomedation;
