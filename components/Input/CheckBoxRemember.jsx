export default function CheckBoxRemember({ checked, onChange }) {
	return (
		<label>
			Se souvenir de moi{" "}
			<input type="checkBox" checked={checked} onChange={onChange} />
		</label>
	);
}
