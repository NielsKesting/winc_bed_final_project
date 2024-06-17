import { PrismaClient } from "@prisma/client";

const getBookings = async (genre, available) => {
	const prisma = new PrismaClient();

	return prisma.bookings.findMany({
		where: {
			genre,
			available,
		},
	});
};

export default getAmenities;
