import NotFoundError from "../../errors/NotFoundError.js";
import { PrismaClient } from "@prisma/client";

const getReviewById = async (id) => {
	const prisma = new PrismaClient();
	const review = await prisma.reviews.findUnique({
		where: {
			id,
		},
	});

	if (!review) {
		throw new NotFoundError("Review", id);
	}

	return review;
};

export default getReviewById;
