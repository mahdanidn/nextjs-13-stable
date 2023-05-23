import React, { Suspense } from "react";
import Image from "next/image";
import Recomedation from "@/app/components/gallerycomponent";
const GalleryPage = async () => {
  const random = Math.floor(Math.random() * 5 + 5);
  await new Promise((resolve) => setTimeout(resolve, random));
  return (
    <div className="sm:flex h-screen max-w-3xl mx-auto flex flex-col justify-center gap-8">
      <div className="flex justify-center items-center">
        <div className="relative h-32 w-32 mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          <Image
            src="/car.jpg"
            alt="car"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div>
          <h4 className="text-lg fond-bold">Hyper Car</h4>
          <div className="mt-1 max-w-prose text-zinc-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis incidunt, tempore nihil maxime perspiciatis eos
            voluptas. Exercitationem hic dolorem mollitia magnam rerum qui quia,
            fugit nemo ut, saepe aperiam aliquam inventore tempore. Nostrum
            cupiditate pariatur iste veritatis, nisi adipisci obcaecati? Enim
            corporis veniam voluptatibus ullam fugiat ratione. Facilis tempore
            voluptates, dicta recusandae et a necessitatibus rerum corrupti
            culpa maxime sunt impedit non quasi distinctio odit aut ullam.
            Facilis, quod repellendus maiores molestias quasi molestiae
            incidunt! Unde animi sed optio soluta eius, repellat dolorem itaque
            quibusdam deserunt ea illo maxime consectetur doloribus tempora
            commodi, sequi voluptatem rem obcaecati reprehenderit voluptatum
            modi!
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {[...new Array(4)].map((_, i) => {
          const images = ["car", "shoe", "plant", "watch"];
          return (
            // eslint-disable-next-line react/jsx-key
            <Suspense fallback={<p>loading...</p>}>
              {/* @ts-expect-error Async server Component */}
              <Recomedation imgSrc={`/${images[i]}.jpg`} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPage;
