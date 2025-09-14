import useUserData from "../../API/useUserData";
import usePostData from "../../API/usePostData";
import PostCardComments from "./PostCardComments";

export default function PostSelected({ userSelect }) {
	const users = useUserData();
	const posts = usePostData();
	if (!posts.length || !users.length) {
		return <p>Chargement...</p>;
	}

	const userFilter = posts.filter((post) => post.userId === userSelect);

	return (
		<div>
			{userFilter.map((post) => {
				const user = users.find((user) => user.id === post.userId);
				if (!user) return null;
				return (
					<PostCardComments key={post.id} user={user} post={post} />
				);
			})}
		</div>
	);
}
