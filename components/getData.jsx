import { useEffect, useState } from "react";

export default function GetData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://dummyjson.com/users");
			const data = await response.json();
			setData(data.users);
		};
		fetchData();
	}, []);
	return data;
}
