import { useState } from "react";
import useUserData from "../../API/useUserData";

export default function SearchBar() {
	const users = useUserData();
	const [entry, setEntry] = useState("");

	const handleInputChange = (e) => {
		const searchTerm = e.target.value;
		console.log("Search term: ", searchTerm);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Rechercher un utilisateur..."
				onChange={handleInputChange}
			/>
		</div>
	);
}
