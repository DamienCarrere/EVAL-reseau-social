import PostList from "../components/Post/PostList";
import useUserData from "../API/useUserData";
import usePostData from "../API/usePostData";
import "./Accueil.css";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Accueil() {
	const users = useUserData();
	const posts = usePostData();
	if (!posts.length || !users.length) {
		return <p>Chargement...</p>;
	}
	return (
		<div className="accueil">
			<SearchBar />
			<PostList />
			{/* <PostSelected userSelect={2} /> */}
		</div>
	);
}
