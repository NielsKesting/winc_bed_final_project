import { PrismaClient } from "@prisma/client";

const getHosts = async (genre, available) => {
	const prisma = new PrismaClient();

	return prisma.hosts.findMany({
		where: {
			genre,
			available,
		},
	});
};

export default getAmenities;
