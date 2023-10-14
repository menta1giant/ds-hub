import { PrismaClient } from "@prisma/client";
import type { User } from '../../types/user';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  protectRoute(event);

  const body = await readBody(event);

  console.log(body);

  const {id, avatar, name} = body.author as User

  const siteUser = await prisma.siteUser.upsert({
    where: {
      id: id
    },
    update: {
      id: id,
      avatar: avatar,
      name: name
    },
    create: {
      id: id,
      avatar: avatar,
      name: name
    },
  });

  return prisma.message.create({
    data: {
      content: body.message,
      authorId: id
    },
  });
});
