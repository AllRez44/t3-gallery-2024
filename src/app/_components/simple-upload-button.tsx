"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

/**
 * Custom Hook for handling file uploads
 * @param args 
 * @returns 
 */
const useUploadThingInputProps = (...args: Input) => {
    const $ut = useUploadThing(...args);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const selectedFiles = Array.from(e.target.files);
        const result = await $ut.startUpload(selectedFiles);

        console.log("uploaded files", result);
        // TODO: persist result in state maybe?
    };

    return {
        inputProps: {
            onChange,
            multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
            accept: "image/*",
        },
        isUploading: $ut.isUploading,
    };
};

export default function SimpleUploadButton() {
    const router = useRouter();
    const { inputProps, isUploading } = useUploadThingInputProps("imageUploader", {
        onClientUploadComplete: () => {
            router.refresh();
        },
    });

    return (
        <div>
            <label htmlFor="upload-button" className={`cursor-pointer p-6 ${isUploading && 'hidden'}`}>Upload</label>
            {isUploading && <p>Uploading...</p>}
            <input
                id="upload-button"
                type="file"
                className="sr-only"
                {...inputProps}
            />
        </div>
    );
}