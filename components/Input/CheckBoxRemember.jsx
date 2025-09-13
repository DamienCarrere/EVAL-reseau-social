import "./Input.css";

export default function CheckBoxRemember({ checked, onChange }) {
	return (
		<label className="remember">
			Se souvenir de moi{" "}
			<input type="checkBox" checked={checked} onChange={onChange} />
		</label>
	);
}
