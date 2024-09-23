import FullPageImage from "~/compontents/full-page-image";

export default async function PhotoPage({
    params: { id: photoId },
}: {
    params: { id: string };
    }) {
    return (
        <div className="flex w-full justify-center">
            <FullPageImage id={photoId} />
        </div>
    );
}
