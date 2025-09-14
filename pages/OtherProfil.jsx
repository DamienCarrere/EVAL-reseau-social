import useUserData from "../API/useUserData";
import PostSelected from "../components/Post/PostSelected";
import ProfileLayout from "../components/Layout/ProfileLayout";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";

function OtherProfil() {
	const users = useUserData();
	const user = users[1];

	const [isFollowing, setIsFollowing] = useState(false);

	if (!user) return <p>Chargement...</p>;

	const handleFollow = () => {
		let current = parseInt(localStorage.getItem("followers"));

		if (isFollowing) {
			current -= 1;
			setIsFollowing(false);
		} else {
			current += 1;
			setIsFollowing(true);
		}

		localStorage.setItem("followers", current);
	};

	return (
		<>
			<SearchBar />
			<ProfileLayout user={user}>
				<button onClick={handleFollow}>
					{isFollowing ? "Unfollow" : "Follow"}
				</button>
			</ProfileLayout>
			<PostSelected userSelect={user.id} />
		</>
	);
}

export default OtherProfil;
