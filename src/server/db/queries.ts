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