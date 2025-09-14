import { useEffect, useState } from "react";

export default function getPostData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://dummyjson.com/posts?limit=0");
			const result = await response.json();
			const postsFixedForID = result.posts.map((post, idx) => ({
				...post,
				userId: (idx % 50) + 1,
			}));
			setData(postsFixedForID);
		};
		fetchData();
	}, []);

	return data;
}
