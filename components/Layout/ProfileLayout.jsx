import "./ProfileLayout.css";

function ProfileLayout({ user, children }) {
	if (!user) return <p>Chargement...</p>;

	return (
		<section>
			<div className="profil-main">
				<div className="img-profil">
					<img src={user.image} alt={user.firstName}></img>
				</div>
				<div className="infoPlusSuvi">
					<div className="info-profil">
						<h2 className="h2-titre">
							{user.firstName} {user.lastName}
						</h2>
						<p className="p-info">{user.age} ans</p>
						<p className="p-info">{user.email}</p>
					</div>
					<div className="suivi">{children}</div>
				</div>
			</div>
		</section>
	);
}

export default ProfileLayout;
