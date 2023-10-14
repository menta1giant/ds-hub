import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  protectRoute(event);

  const body = await readBody(event);

  return prisma.event.create({
    data: {
      id: Math.floor(Math.random() * 10000),
      hostId: 123,
      title: body.title,
      description: body.description,
    },
  });
});
