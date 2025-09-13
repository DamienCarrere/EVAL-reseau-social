import getData from "../API/getData";

export default function Accueil() {
	const data = getData();
	if (!data.length) {
		return <p>Chargement...</p>;
	}

	return (
		<div>
			<h1>Test</h1>

			<li>
				<img src={data[2].image} alt="Profile" />
			</li>
		</div>
	);
}

// function DisplayProfilePics() {
// 	const getAPI = fetch("https://dummyjson.com/users");

// 	const profilePicture = user.image;
// 	return <img src={profilePicture} alt="Profile Picture"></img>;
// }

// DisplayProfilePics;
