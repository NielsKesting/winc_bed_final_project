import bookingData from "../../data/bookings.json" assert { type: "json" };

const updatebookingById = (
	id,
	checkinDate,
	checkoutDate,
	numberOfGuests,
	totalPrice,
	bookingStatus
) => {
	const booking = bookingData.amenities.find((booking) => booking.id === id);

	if (!booking) {
		throw new Error(`booking with id ${id} was not found!`);
	}

	booking.checkinDate = checkinDate ?? booking.checkinDate;
	booking.checkoutDate = checkoutDate ?? booking.checkoutDate;
	booking.numberOfGuests = numberOfGuests ?? booking.numberOfGuests;
	booking.totalPrice = totalPrice ?? booking.totalPrice;
	booking.bookingStatus = bookingStatus ?? booking.bookingStatus;

	return booking;
};

export default updatebookingById;
