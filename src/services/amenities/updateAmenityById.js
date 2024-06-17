import amenityData from "../../data/amenitys.json" assert { type: "json" };

const updateamenityById = (id, name) => {
	const amenity = amenityData.amenities.find((amenity) => amenity.id === id);

	if (!amenity) {
		throw new Error(`amenity with id ${id} was not found!`);
	}

	amenity.title = title ?? amenity.title;
	amenity.author = author ?? amenity.author;
	amenity.isbn = isbn ?? amenity.isbn;
	amenity.pages = pages ?? amenity.pages;
	amenity.available = available ?? amenity.available;
	amenity.genre = genre ?? amenity.genre;

	return amenity;
};

export default updateamenityById;
