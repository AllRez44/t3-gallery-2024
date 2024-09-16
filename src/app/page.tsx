import Image from "next/image";
import { Suspense } from "react";
import { db } from "~/server/db";

const mockImageUrls = [
  "https://utfs.io/f/RMDArrATFzJjTeEcLOWp6g4N9W02VwZQxCK7lsifjTo3OGUu",
  "https://utfs.io/f/RMDArrATFzJjBsxLFCKE35KMQdurwNxyiYIbcPEmJFz6VHka",
];

const mockImages = mockImageUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        <Suspense fallback={<div className='w-48'>Loading...</div>}>
          {posts.map((post) => (
            <div key={post.id} className="w-48">
              <p>{post.name}</p>
            </div>
          ))}
        </Suspense>
        <Suspense fallback={<div className='w-48'>Loading...</div>}>
          {[...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48">
              <Image src={image.url} alt="Mock Image" width={192} height={192} />
            </div>
          ))}
        </Suspense>
      </div>
    </main>
  );
}
