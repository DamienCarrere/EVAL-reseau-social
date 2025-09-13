import PostList from "../components/Post/PostList";
import useUserData from "../API/useUserData";
import usePostData from "../API/usePostData";
import "./Accueil.css";

export default function Accueil() {
	const users = useUserData();
	const posts = usePostData();
	if (!posts.length || !users.length) {
		return <p>Chargement...</p>;
	}
	return (
		<div className="accueil">
			<PostList />
			{/* <PostSelected userSelect={2} /> */}
		</div>
	);
}
