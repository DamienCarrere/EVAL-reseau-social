import PostCard from "./PostCard";

export default function PostList({ posts, users }) {
	if (!posts.length || !users.length) {
		return <p>Chargement...</p>;
	}
	return (
		<div>
			{posts.map((post) => {
				const user = users.find((user) => user.id === post.userId);
				if (!user) return null;
				return <PostCard key={post.id} user={user} post={post} />;
			})}
		</div>
	);
}
