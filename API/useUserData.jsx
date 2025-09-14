import { useEffect, useState } from "react";

export default function useUserData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://dummyjson.com/users");
			const result = await response.json();
			setData(result.users);
		};
		fetchData();
	}, []);

	return data;
}
