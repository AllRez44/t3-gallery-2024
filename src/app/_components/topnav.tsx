"use client";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
    const router = useRouter();

    return (
        <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
            <div className="cursor-pointer">Gallery</div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <div className="flex gap-12">
                        <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={() => {
                                router.refresh();
                            }}
                        />
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    );
}