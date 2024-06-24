import { PrismaClient } from "@prisma/client";

const getHosts = async (
	id,
	username,
	password,
	name,
	email,
	phoneNumber,
	profilePicture,
	aboutMe
) => {
	const prisma = new PrismaClient();

	return prisma.hosts.findMany({
		where: {
			id,
			username,
			password,
			name,
			email,
			phoneNumber,
			profilePicture,
			aboutMe,
		},
	});
};

export default getHosts;
