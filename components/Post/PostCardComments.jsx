import "./PostCard.css";
import useCommentsData from "../../API/useCommentsData";

export default function PostCardComments({ user, post }) {
	const allComments = useCommentsData();
	const postComments = allComments.filter(
		(comment) => comment.postId === post.id
	);

	if (!post || !user) {
		return <p>Chargement...</p>;
	}

	return (
		<section className="sectionCard">
			<div className="card">
				<div className="divImg">
					<img
						src={user.image}
						alt={user.firstName}
						className="imgProfile"
					/>
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
					<button>💬</button>
					<button>🔁</button>
					<button>👍 {post.reactions.likes}</button>
					<button>👎 {post.reactions.dislikes}</button>
				</div>
			</div>

			<div>
				<h4>Commentaires</h4>
				{postComments.length === 0 ? (
					<p>Aucun commentaire</p>
				) : (
					<ul>
						{postComments.map((c) => (
							<li key={c.id}>
								<strong>{c.user.username} :</strong> {c.body}
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
}
