import { useState } from "react";
import useUserData from "../../API/useUserData";
import InputControl from "./SearchBarComponents/InputControl";
import SearchFilter from "./SearchBarComponents/SearchFilter";
import "./SearchBar.css";

export default function SearchBar() {
	const users = useUserData();
	const [entry, setEntry] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	const inputChange = (e) => {
		const searchTerm = e.target.value;
		setEntry(searchTerm);
		if (searchTerm.trim() === "") {
			setFilteredData([]);
			return;
		}

		const filteredUsers = users.filter((user) =>
			user.username.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredData(filteredUsers);
	};

	return (
		<div className="search-bar">
			<InputControl handleInput={inputChange} searchItem={entry} />
			<SearchFilter filteredData={filteredData} handleClick={setEntry} />
		</div>
	);
}
