import { auth } from "@clerk/nextjs/server";

export function getUser() {
  "server-only";
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");
  return user;
}
