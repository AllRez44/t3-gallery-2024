import { db } from "~/server/db";
import Image from "next/image";
import { Suspense } from "react";

export async function Images() {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
    });
    return (
        <div className="flex flex-wrap gap-4 p-4">
            <Suspense fallback={<div className='w-48'>Loading...</div>}>
                {images.map((image, index) => (
                    <div key={image.id + index} className="w-48 h-48">
                        <Image src={image.url} className="w-48 h-48" width={192} height={192} alt={image.name} />
                    </div>
                ))}
            </Suspense>
        </div>
    );
}