import "server-only";
import { db } from ".";
import { getUser } from "../auth/auth";

export async function getMyImages() {
  const user = getUser();

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}

export async function getImage(id: number) {
  const user = getUser();

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
    orderBy: (model, { desc }) => desc(model.id),
  });

  if (!image || image.userId !== user.userId) {
    throw new Error("Image not found");
  }

  return image;
}