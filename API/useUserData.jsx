import { useEffect, useState } from "react";

export default function useUserData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://dummyjson.com/users");
			const result = await response.json();
			console.log("users fetched: ", result.users);
			setData(result.users);
		};
		fetchData();
	}, []);

	return data;
}
