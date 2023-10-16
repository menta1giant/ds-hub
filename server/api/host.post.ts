import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  protectRoute(event);

  const body = await readBody(event);

  const { id, name } = body.host;
  console.log(body);

  return prisma.host.create({
    data: {
      id,
      name,
      hostType: "Discord",
    },
  });
});
