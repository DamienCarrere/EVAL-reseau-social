import { useEffect, useState } from "react";

export default function getPostData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://dummyjson.com/posts");
			const result = await response.json();
			const postsFixedForID = result.posts.map((post, idx) => ({
				...post,
				userId: (idx % 30) + 1,
			}));
			setData(postsFixedForID);
		};
		fetchData();
	}, []);

	return data;
}
