import PostList from "../components/Post/PostList";
import PostCard from "../components/Post/PostCard";
import useUserData from "../API/useUserData";
import usePostData from "../API/usePostData";
import PostSelected from "../components/Post/PostSelected";

export default function Accueil() {
	const users = useUserData();
	const posts = usePostData();
	if (!posts.length || !users.length) {
		return <p>Chargement...</p>;
	}
	return (
		<div>
			<PostList />
			{/* <PostSelected userSelect={2} /> */}
		</div>
	);
}
