import Image from "next/image";
import { getImage } from "~/server/db/queries";

export default async function FullPageImage({
    id: photoId,
}: {
    id: string,
}) {
    const id = Number(photoId);
    if (isNaN(id)) throw new Error("Invalid photo ID");

    const image = await getImage(id);
    return (
        <div className="flex flex-col items-center my-auto w-auto max-w-[100dvw] max-h-full p-4">
            <Image width={400} height={400} src={image.url} alt={image.name} className="w-full" />
            <p className="text-md font-medium mt-1.5 text-gray-300">{image.name}</p>
        </div>
    );
}