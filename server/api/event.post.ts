import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  protectRoute(event);

  const body = await readBody(event);
  console.log(body);

  const {
    name: title,
    guildId: hostId,
    scheduledStartTimestamp: date,
    description,
    id,
  } = body.event;

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
