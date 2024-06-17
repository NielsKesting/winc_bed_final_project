import hostsData from "../../data/hosts.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createHost = (
	id,
	username,
	password,
	name,
	email,
	phoneNumber,
	profilePicture,
	aboutMe
) => {
	const newHost = {
		id: uuid(),
		username,
		password,
		name,
		email,
		phoneNumber,
		profilePicture,
		aboutMe,
	};

	hostsData.hosts.push(newHost);
	return newHost;
};

export default createHost;
