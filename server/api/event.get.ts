import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const events = await prisma.event.findMany();

  if (!events) {
    throw createError({
      statusCode: 404,
      statusMessage: "Events not found",
    });
  }

  return events;
});
