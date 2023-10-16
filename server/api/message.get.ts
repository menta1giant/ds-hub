import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const messages = await prisma.message.findMany({
    include: {
      author: true,
    },
  });

  if (!messages) {
    throw createError({
      statusCode: 404,
      statusMessage: "Messages not found",
    });
  }

  return messages;
});
