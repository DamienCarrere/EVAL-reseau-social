import "./Input.css";

export default function InputPseudo({ value, onChange, placeholder }) {
	return (
		<>
			<label htmlFor="pseudo" className="label-connexion">
				Pseudo :
			</label>
			<input
				className="input-connexion"
				name="pseudo"
				type=""
				id="pseudo"
				value={value}
				onChange={onChange}
				placeholder={placeholder || "Nom utilisateur"}
			/>
		</>
	);
}
