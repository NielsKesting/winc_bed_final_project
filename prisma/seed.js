import { PrismaClient } from "@prisma/client";
import amenitiesData from "../src/data/amenities.json" assert { type: "json" };
import bookingsData from "../src/data/bookings.json" assert { type: "json" };
import hostsData from "../src/data/hosts.json" assert { type: "json" };
import propertiesData from "../src/data/properties.json" assert { type: "json" };
import reviewsData from "../src/data/reviews.json" assert { type: "json" };
import usersData from "../src/data/users.json" assert { type: "json" };

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

async function main() {
	const { amenities } = amenitiesData;
	const { bookings } = bookingsData;
	const { hosts } = hostsData;
	const { properties } = propertiesData;
	const { reviews } = reviewsData;
	const { users } = usersData;

	for (const amenity of amenities) {
		await prisma.amenities.upsert({
			where: { id: amenity.id },
			update: {},
			create: amenity,
		});
	}
	for (const booking of bookings) {
		await prisma.bookings.upsert({
			where: { id: booking.id },
			update: {},
			create: booking,
		});
	}
	for (const host of hosts) {
		await prisma.hosts.upsert({
			where: { id: host.id },
			update: {},
			create: host,
		});
	}
	for (const property of properties) {
		await prisma.properties.upsert({
			where: { id: property.id },
			update: {},
			create: property,
		});
	}
	for (const review of reviews) {
		await prisma.reviews.upsert({
			where: { id: review.id },
			update: {},
			create: review,
		});
	}
	for (const user of users) {
		await prisma.users.upsert({
			where: { id: user.id },
			update: {},
			create: user,
		});
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
