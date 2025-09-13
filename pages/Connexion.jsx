import "./Connexion.css";
import BtnConnexion from "../components/Buttons/ButtonConnexion";
import InputPseudo from "../components/Input/InputPseudo";
import InputMdp from "../components/Input/InputMdp";
import CheckBoxRemember from "../components/Input/CheckBoxRemember";
import { useEffect, useState } from "react";
import getData from "../API/getData";

function Connexion() {
	const [pseudo, setPseudo] = useState("");
	const [mdp, setMdp] = useState("");
	const [remember, setRemember] = useState(false);
	const getUser = getData();

	useEffect(() => {
		const saveUser = localStorage.getItem("pseudo");
		if (saveUser) {
			setPseudo(saveUser);
			setRemember(true);
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		// au click requette pour savoir si pseudo et mdp son dans l'api
		const userFound = getUser.find(
			(u) => u.username === pseudo && u.password === mdp
		);
		if (userFound) {
			console.log("connexion réussi :" + userFound);

			if (remember) {
				localStorage.setItem("pseudo", pseudo);
			} else {
				localStorage.removeItem("pseudo"); // suprimer du localestorage si la case et decocher
			}
		} else {
			console.log("identifiant invalide ");
		}

		const formDate = {
			pseudo,
			mdp,
			remember,
		};
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
