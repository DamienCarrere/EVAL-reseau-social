import "./Connexion.css";
import BtnConnexion from "../components/Buttons/ButtonConnexion";
import InputPseudo from "../components/Input/InputPseudo";
import InputMdp from "../components/Input/InputMdp";
import CheckBoxRemember from "../components/Input/CheckBoxRemember";
import { useState } from "react";

function Connexion() {
	const [pseudo, setPseudo] = useState("");
	const [mdp, setMdp] = useState("");
	const [remember, setRemember] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formDate = {
			pseudo,
			mdp,
			remember,
		};
		console.log(formDate);
	};

	return (
		<div className="login">
			<form onSubmit={handleSubmit} className="login-form">
				<InputPseudo
					value={pseudo}
					onChange={(e) => setPseudo(e.target.value)}
				/>
				<InputMdp
					value={mdp}
					onChange={(e) => setMdp(e.target.value)}
				/>
				<CheckBoxRemember
					value={remember}
					onChange={(e) => setRemember(e.target.checked)}
				/>
				<BtnConnexion />
			</form>
		</div>
	);
}

export default Connexion;
