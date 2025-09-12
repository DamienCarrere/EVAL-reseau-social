import { useState } from "react";

export default function InputPseudo() {
	const [pseudo, setPseudo] = useState("");
	return (
		<>
			<label>Pseudo :</label>
			<input
				name="pseudo"
				type=""
				id="pseudo"
				value={pseudo}
				onChange={(e) => setPseudo(e.target.value)}
			/>
		</>
	);
}
