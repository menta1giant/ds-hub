import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  protectRoute(event);

  const body = await readBody(event);

  const { id, title, description, hostId, date } = body;
  console.log(body);

  return prisma.event.create({
    data: {
      discordId: id,
      hostId,
      title,
      description,
      date: new Date(date).toISOString(),
    },
  });
});
