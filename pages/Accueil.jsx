import GetData from "../components/getData";

export default function Accueil() {
	<GetData />;

	return (
		<div>
			<h1>Test</h1>
			{data.length > 0 ? (
				<li>
					<img src={data[2].image} alt="Profile" />
				</li>
			) : (
				<p>Chargement...</p>
			)}
		</div>
	);
}

// function DisplayProfilePics() {
// 	const getAPI = fetch("https://dummyjson.com/users");

// 	const profilePicture = user.image;
// 	return <img src={profilePicture} alt="Profile Picture"></img>;
// }

// DisplayProfilePics;
