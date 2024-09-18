import Image from "next/image";
import { Suspense } from "react";
import { getMyImages } from "~/server/db/queries";

export async function Images() {
    const images = await getMyImages();
    return <div className="flex flex-wrap gap-4 p-4" >
        <Suspense fallback={<div className='w-48'>Loading...</div>}>
            {images.map((image) => (
                <div key={image.id} className="w-48 h-48">
                    <Image
                        src={image.url}
                        className="w-48 h-48 object-cover"
                        width={192}
                        height={192}
                        alt={image.name}
                    />
                </div>
            ))}
        </Suspense>
        {images.length <= 0 &&
            <p className="text-xl w-full text-center p-4">No images uploaded yet</p>
        }
    </div>
}