import useUserData from "../../API/useUserData";
import PostSelected from "../../components/Post/PostSelected";
import ProfileLayout from "../../components/Layout/ProfileLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

function MyProfile() {
	const users = useUserData();
	const user = users[0];
	const [followers, setFollowers] = useState(0);

	useEffect(() => {
		const storage = parseInt(localStorage.getItem("followers")) || 0;
		setFollowers(storage);
	}, []);

	if (!user) return <p>Chargement...</p>;

	return (
		<>
			<SearchBar />
			<ProfileLayout user={user}>
				<p className="p-suivi">suivi : {followers}</p>
			</ProfileLayout>
			<PostSelected userSelect={user.id} />
		</>
	);
}

export default MyProfile;
