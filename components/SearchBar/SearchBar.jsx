import { useState } from "react";
import useUserData from "../../API/useUserData";
import InputControl from "./SearchBarComponents/InputControl";
import SearchFilter from "./SearchBarComponents/SearchFilter";
import SortFilter from "../SortFilter/SortFilter";
import "./SearchBar.css";

export default function SearchBar() {
	const users = useUserData();
	const [entry, setEntry] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const [posts, setPosts] = useState([]);

	const handleInputChange = (e) => {
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
			<SortFilter posts={posts} onSort={setPosts} />
			<InputControl handleInput={handleInputChange} searchItem={entry} />
			<SearchFilter filteredData={filteredData} handleClick={setEntry} />
		</div>
	);
}
