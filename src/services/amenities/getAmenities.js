import { PrismaClient } from "@prisma/client";

const getAmenities = async (genre, available) => {
	const prisma = new PrismaClient();

	return prisma.amenity.findMany({
		where: {
			genre,
			available,
		},
	});
};

export default getAmenities;
