import "./SortFilter.css";

export default function SortFilter({ posts, onSort }) {
	const sortChange = (e) => {
		const value = e.target.value;
		let sorted = [...posts];

		switch (value) {
			case "views-asc":
				sorted.sort((a, b) => a.views - b.views);
				break;
			case "views-desc":
				sorted.sort((a, b) => b.views - a.views);
				break;
			case "likes-asc":
				sorted.sort((a, b) => a.reactions.likes - b.reactions.likes);
				break;
			case "likes-desc":
				sorted.sort((a, b) => b.reactions.likes - a.reactions.likes);
				break;
			default:
				break;
		}

		onSort(sorted);
	};

	return (
		<div>
			<label htmlFor="sortSelect">Trier par :</label>
			<select id="sortSelect" onChange={sortChange} defaultValue="">
				<option value="" disabled>
					-- Choisir un tri --
				</option>
				<option value="views-asc">↑ Vues (croissant) ↑</option>
				<option value="views-desc">↓ Vues (décroissant) ↓</option>
				<option value="likes-asc">↑ Likes (croissant) ↑</option>
				<option value="likes-desc">↓ Likes (décroissant) ↓</option>
			</select>
		</div>
	);
}
