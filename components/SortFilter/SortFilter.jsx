import { useState } from "react";

export default function SortFilter() {
	const [order, setOrder] = useState("descendant");

	const handleChange = (e) => {
		setOrder(e.target.value);

		const sortedPosts = [...posts].sort((a, b) => {
			if (e.target.value === "ascendant") {
				return a.views - b.views;
			} else {
				return b.views - a.views;
			}
		});
		onSort(sortedPosts);
	};

	return (
		<div>
			<label>Trier par:</label>
			<select value={order} onChange={handleChange}>
				<option value="descendant">
					↓ Nombres de vues décroissantes
				</option>
				<option value="ascendant">↑ Nombres de vues croissantes</option>
			</select>
		</div>
	);
}
