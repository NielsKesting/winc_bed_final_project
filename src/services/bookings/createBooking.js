import bookingsData from "../../data/bookings.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createBooking = (
	id,
	userId,
	propertyId,
	checkinDate,
	checkoutDate,
	numberOfGuests,
	totalPrice,
	bookingStatus
) => {
	const newBooking = {
		id: uuid(),
		userId,
		propertyId,
		checkinDate,
		checkoutDate,
		numberOfGuests,
		totalPrice,
		bookingStatus,
	};

	bookingsData.bookings.push(newAmenity);
	return newBooking;
};

export default createAmenity;
