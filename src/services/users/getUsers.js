import { PrismaClient } from "@prisma/client";

const getUsers = async (
	id,
	username,
	password,
	name,
	email,
	phoneNumber,
	profilePicture
) => {
	const prisma = new PrismaClient();

	return prisma.users.findMany({
		where: {
			id,
			username,
			password,
			name,
			email,
			phoneNumber,
			profilePicture,
		},
	});
};

export default getUsers;
