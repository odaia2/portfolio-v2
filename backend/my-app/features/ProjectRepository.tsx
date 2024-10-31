import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export const createProjectRepository = () => {
  const list = async () => await client.project.findMany();
  const getById = async (id: any) => await client.project.findUnique({ where: { id } });
  const create = async (data: any) => await client.project.create({ data });
  const remove = async (id: any) => {
    const deletedProject = await client.project.delete({ where: { id } });
    return !!deletedProject;
  };

  return { list, getById, create, remove };
};

export const projectRepository = createProjectRepository();
