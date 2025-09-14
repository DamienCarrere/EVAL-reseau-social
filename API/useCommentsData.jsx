import { useEffect, useState } from "react";

export default function useUserData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://dummyjson.com/comments");
			const result = await response.json();
			const commentsFixedForID = result.comments.map((comment, idx) => ({
				...comment,
				postId: (idx % 30) + 1,
			}));
			console.log("comments fetched: ", commentsFixedForID);
			setData(commentsFixedForID);
		};
		fetchData();
	}, []);

	return data;
}
