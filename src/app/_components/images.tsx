import { db } from "~/server/db";
import Image from "next/image";
import { Suspense } from "react";

export async function Images() {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
    });
    const multiImagesCopies = [...images, ...images, ...images, ...images, ...images];
    return (
        <div className="flex flex-wrap gap-4 justify-evenly">
            <Suspense fallback={<div className='w-48'>Loading...</div>}>
                {multiImagesCopies.map((image) => (
                    <div key={image.id} className="w-48">
                        <Image src={image.url} alt={image.name} width={192} height={192} />
                    </div>
                ))}
            </Suspense>
        </div>
    );
}