"use client";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import GalleryButton from "./gallery-button";
import SimpleUploadButton from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-6 text-xl font-semibold">
      <GalleryButton />
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex gap-6">
            <SimpleUploadButton />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
