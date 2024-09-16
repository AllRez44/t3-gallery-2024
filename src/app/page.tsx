import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { Suspense } from "react";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  const multiImagesCopies = [...images, ...images, ...images, ...images, ...images];
  return (
    <main className="">
      <SignedIn>
        <div className="flex flex-wrap gap-4 justify-evenly">
          <Suspense fallback={<div className='w-48'>Loading...</div>}>
            {multiImagesCopies.map((image) => (
              <div key={image.id} className="w-48">
                <Image src={image.url} alt={image.name} width={192} height={192} />
              </div>
            ))}
          </Suspense>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="text-center flex flex-col gap-3 py-3 justify-center">
          <h1 className="text-4xl font-bold">Welcome to T3 Gallery</h1>
          <p className="text-lg">Please sign in to view the gallery</p>
        </div>
      </SignedOut>
    </main>
  );
}
