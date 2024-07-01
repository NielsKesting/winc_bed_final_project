import { PrismaClient } from "@prisma/client";

const getReviews = async (id, userId, propertyId, rating, comment) => {
	const prisma = new PrismaClient();

	return prisma.reviews.findMany({
		where: {
			id,
			userId,
			propertyId,
			rating,
			comment,
		},
	});
};

export default getReviews;
