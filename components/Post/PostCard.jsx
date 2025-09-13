export default function PostCard({ user, post }) {
	if (!post || !user) {
		return <p>Chargement...</p>;
	}

	return (
		<section>
			<div>
				<div>
					<img src={user.image} alt={user.firstName}></img>
				</div>
				<div>
					<p>{user.username}</p>
					<p>{post.title}</p>
				</div>
			</div>
			<div>
				<p>{post.body}</p>
			</div>
			<div>
				<span>Vues: {post.views}</span>
				<div>
					<button>💬</button>
					<button>🔗</button>
					<button>👍 {post.reactions.likes}</button>
					<button>👎 {post.reactions.dislikes}</button>
				</div>
			</div>
		</section>
	);
}
