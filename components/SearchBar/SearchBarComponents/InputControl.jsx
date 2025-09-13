import "../SearchBar.css";

export default function InputControl({ handleInput, searchItem }) {
	return (
		<input
			type="text"
			className="input-file"
			placeholder="Search..."
			onChange={handleInput}
			value={searchItem}
		/>
	);
}
