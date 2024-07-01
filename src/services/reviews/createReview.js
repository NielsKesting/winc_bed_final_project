import reviewData from "../../data/properties.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createReview = (id, userId, reviewId, rating, comment) => {
	const newReview = {
		id: uuid(),
		userId,
		reviewId,
		rating,
		comment,
	};

	reviewData.review.push(newReview);
	return newReview;
};

export default createReview;
