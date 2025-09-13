import useUserData from "../../API/useUserData";
import usePostData from "../../API/usePostData";
import PostCard from "./PostCard";

export default function PostList({ userSelect }) {
	const users = useUserData();
	const posts = usePostData();
	if (!posts.length || !users.length) {
		return <p>Chargement...</p>;
	}

	const userFilter = posts.filter((user) => user.id === userSelect);

	return (
		<div>
			{userFilter.map((post) => {
				const user = users.find((user) => user.id === post.userId);
				if (!user) return null;
				return <PostCard key={post.id} user={user} post={post} />;
			})}
		</div>
	);
}
