import { PrismaClient } from "@prisma/client";

const getProperties = async (
	id,
	title,
	description,
	location,
	pricePerNight,
	bedroomCount,
	bathRoomCount,
	maxGuestCount,
	hostId,
	rating
) => {
	const prisma = new PrismaClient();

	return prisma.properties.findMany({
		where: {
			id,
			title,
			description,
			location,
			pricePerNight,
			bedroomCount,
			bathRoomCount,
			maxGuestCount,
			hostId,
			rating,
		},
	});
};

export default getProperties;
