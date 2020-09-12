import { PrismaClient } from '@prisma/client';

module.exports.createStore = () => {
  const prisma = new PrismaClient();
  return prisma;
};
