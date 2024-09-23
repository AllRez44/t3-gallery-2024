import FullPageImage from "~/compontents/full-page-image";
import Modal from "./modal";
import { Suspense } from "react";

export default async function PhotoModal({
    params: { id: photoId },
}: {
    params: { id: string };
    }) {
    return (
        <Modal>
            <Suspense fallback={<div className="w-full text-center">Loading...</div>}>
                <FullPageImage id={photoId} />
            </Suspense>
        </Modal>
    );
}
