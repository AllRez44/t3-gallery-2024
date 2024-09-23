"use client";

import { useRouter } from "next/navigation";

export default function GalleryButton() {
    const router = useRouter();

    const handleClickGallery = () => {
        router.push("/");
    }

    return (
        <div
            className="cursor-pointer"
            onClick={handleClickGallery}
        >
            Gallery
        </div>
    )
}