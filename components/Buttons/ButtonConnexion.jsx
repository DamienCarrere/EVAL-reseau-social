import "./ButtonConnexion.css";

export default function BtnConnexion({ onClick }) {
	return (
		<button type="submit" className="submit" onClick={onClick}>
			Connexion
		</button>
	);
}
