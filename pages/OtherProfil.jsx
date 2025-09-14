import useUserData from "../API/useUserData";
import PostSelected from "../components/Post/PostSelected";
import ProfileLayout from "../components/Layout/ProfileLayout";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";

function OtherProfil() {
	const users = useUserData();
	const user = users[1];

	const [follow, setFollow] = useState(false);

	const handleFollow = () => {
		setFollow(true);
	};

	const handleUnfollow = () => {
		setFollow(false);
	};

	if (!user) return <p>Chargement...</p>;

	return (
		<>
			<SearchBar />
			<ProfileLayout user={user}>
				{follow ? (
					<button onClick={handleUnfollow}>Unfollow</button>
				) : (
					<button onClick={handleFollow}>Follow</button>
				)}
			</ProfileLayout>
			<PostSelected userSelect={user.id} />
		</>
	);
}

export default OtherProfil;
