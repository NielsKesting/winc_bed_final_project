import userData from "../../data/properties.json" assert { type: "json" };

const updateUserById = (
	id,
	username,
	password,
	name,
	email,
	phoneNumber,
	profilePicture
) => {
	const user = userData.users.find((user) => user.id === id);

	if (!user) {
		throw new Error(`user with id ${id} was not found!`);
	}

	user.id = id ?? user.id;
	user.username = username ?? user.username;
	user.password = password ?? user.password;
	user.name = name ?? user.name;
	user.email = email ?? user.email;
	user.phoneNumber = phoneNumber ?? user.phoneNumber;
	user.profilePicture = profilePicture ?? user.profilePicture;

	return user;
};

export default updateUserById;
