import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  protectRoute(event);

  const body = await readBody(event);

  const { id, avatar, name } = body.author;

  await prisma.siteUser.upsert({
    where: {
      id,
    },
    update: {
      id,
      avatar,
      name,
    },
    create: {
      id,
      avatar,
      name,
    },
  });

  return prisma.message.create({
    data: {
      content: body.message,
      authorId: id,
    },
  });
});
