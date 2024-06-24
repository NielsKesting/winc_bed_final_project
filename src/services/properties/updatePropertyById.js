import propertyData from "../../data/properties.json" assert { type: "json" };

const updatepropertyById = (
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
	const property = propertyData.properties.find(
		(property) => property.id === id
	);

	if (!property) {
		throw new Error(`property with id ${id} was not found!`);
	}

	property.id = id ?? property.id;
	property.title = title ?? property.title;
	property.description = description ?? property.description;
	property.location = location ?? property.location;
	property.pricePerNight = pricePerNight ?? property.pricePerNight;
	property.bedroomCount = bedroomCount ?? property.bedroomCount;
	property.bathRoomCount = bathRoomCount ?? property.bathRoomCount;
	property.maxGuestCount = maxGuestCount ?? property.maxGuestCount;
	property.hostId = hostId ?? property.maxGuestCount;
	property.rating = rating ?? property.rating;

	return property;
};

export default updatepropertyById;
