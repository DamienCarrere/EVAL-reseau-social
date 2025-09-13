import "../SearchBar.css";

export default function SearchFilter({ filteredData, handleClick }) {
	return (
		<div className="item-list">
			<ul>
				{filteredData.map((user) => {
					return (
						<li
							key={user.id}
							onClick={() => handleClick(user.username)}
						>
							<img
								src={user.image}
								alt={user.firstName}
								className="imgList"
							></img>
							{user.username}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
