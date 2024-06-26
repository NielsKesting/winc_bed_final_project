import propertyData from "../../data/properties.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createProperty = (
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
	const newProperty = {
		id: uuid(),
		title,
		description,
		location,
		pricePerNight,
		bedroomCount,
		bathRoomCount,
		maxGuestCount,
		hostId,
		rating,
	};

	propertyData.property.push(newProperty);
	return newProperty;
};

export default createProperty;
