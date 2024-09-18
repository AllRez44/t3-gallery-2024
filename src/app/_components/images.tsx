import Image from "next/image";
import { Suspense } from "react";
import { getMyImages } from "~/server/db/queries";

export async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4 p-4">
      <Suspense fallback={<div className="w-48">Loading...</div>}>
        {images.map((image) => (
          <div key={image.id} className="h-48 w-48">
            <Image
              src={image.url}
              className="h-48 w-48 object-cover"
              width={192}
              height={192}
              alt={image.name}
            />
          </div>
        ))}
      </Suspense>
      {images.length <= 0 && (
        <p className="w-full p-4 text-center text-xl">No images uploaded yet</p>
      )}
    </div>
  );
}
