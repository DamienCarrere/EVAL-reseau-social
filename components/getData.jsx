import { useEffect, useState } from "react";
import Accueil from "../pages/Accueil";

export default function GetData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://dummyjson.com/users");

				if (!response.ok) {
					throw new Error("Fetch impossible");
				}
				const result = await response.json();
				//console.log(result.users);
				setData(result.users);
			} catch (error) {
				console.error("Erreur de recuperation des donnees", error);
				setData([]);
			}
		};
		fetchData();
	}, []);

	return <Accueil data={data} />;
}
