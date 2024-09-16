import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "./_components/images";
import { SignInMessage } from "./_components/signin_message";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <SignedIn>
        <Images />
      </SignedIn>
      <SignedOut>
        <SignInMessage />
      </SignedOut>
    </main>
  );
}
