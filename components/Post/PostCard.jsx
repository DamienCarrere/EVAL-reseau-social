import "./PostCard.css";

export default function PostCard({ user, post }) {
	if (!post || !user) {
		return <p>Chargement...</p>;
	}

	return (
		<section className="sectionCard">
			<div className="card">
				<div className="divImg">
					<img src={user.image} alt={user.firstName} className="imgProfile"/>
				</div>
				<div className="divInfo">
					<p className="username">{user.username}</p>
					<p className="title">{post.title}</p>
				</div>
			</div>
			<div className="divPost">
				<p>{post.body}</p>
			</div>
			<div className="divReactions">
				<span>Vues: {post.views}</span>
				<div className="divButtons">
					<button className="button-post">💬</button>
					<button className="button-post">🔁</button>
					<button className="button-post">👍 {post.reactions.likes}</button>
					<button className="button-post">👎 {post.reactions.dislikes}</button>
				</div>
			</div>
		</section>
	);
}
