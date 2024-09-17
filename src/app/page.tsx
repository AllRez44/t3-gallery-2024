import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "./_components/images";
import { SignInMessage } from "./_components/signin_message";
import { UploadButton } from "~/utils/uploadthing";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <SignedIn>
        <UploadButton endpoint="imageUploader" />
        <Images />
      </SignedIn>
      <SignedOut>
        <SignInMessage />
      </SignedOut>
    </main>
  );
}
