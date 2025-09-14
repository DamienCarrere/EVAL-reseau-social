import PostList from "../components/Post/PostList";
import useUserData from "../API/useUserData";
import usePostData from "../API/usePostData";
import "./Accueil.css";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState, useEffect, use } from "react";
import SortFilter from "../components/SortFilter/SortFilter";

export default function Accueil() {
	const users = useUserData();
	const posts = usePostData();
	const [sortPost, setSortPost] = useState([]);

	useEffect(() => {
		setSortPost(posts);
	}, [posts]);

	if (!posts.length || !users.length) {
		return <p>Chargement...</p>;
	}
	return (
		<div className="accueil">
			<SearchBar />
			<SortFilter posts={sortPost} onSort={setSortPost} />
			<PostList posts={sortPost} users={users} />
			{/* <PostSelected userSelect={2} /> */}
		</div>
	);
}
