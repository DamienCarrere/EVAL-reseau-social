import "./Input.css";

export default function InputMdp({ value, onChange, placeholder }) {
	return (
		<>
			<label htmlFor="password" className="label-connexion">
				Mot de passe :
			</label>
			<input
				className="input-connexion"
				name="mdp"
				type="password"
				id="password"
				value={value}
				onChange={onChange}
				placeholder={placeholder || "Mot de passe"}
			/>
		</>
	);
}
