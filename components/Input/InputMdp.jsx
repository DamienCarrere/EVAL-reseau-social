import { useState } from "react";

export default function InputMdp() {
	const [mdp, setMdp] = useState("");
	return (
		<>
			<label htmlFor="mdp">Mot de passe :</label>
			<input
				name="mdp"
				type="password"
				id="password"
				value={mdp}
				onChange={(e) => setMdp(e.target.value)}
			/>
		</>
	);
}
