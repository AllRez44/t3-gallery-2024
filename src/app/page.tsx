import Image from "next/image";
import { Suspense } from "react";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();
  const multiImagesCopies = [...images, ...images, ...images, ...images, ...images];
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        <Suspense fallback={<div className='w-48'>Loading...</div>}>
          {multiImagesCopies.map((image) => (
            <div key={image.id} className="w-48">
              <Image src={image.url} alt={image.name} width={192} height={192} />
            </div>
          ))}
        </Suspense>
      </div>
    </main>
  );
}
