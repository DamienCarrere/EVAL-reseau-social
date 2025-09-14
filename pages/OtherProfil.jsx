import useUserData from "../API/useUserData";
import PostSelected from "../components/Post/PostSelected";
import ProfileLayout from "../components/Layout/ProfileLayout";
import { FollowContext } from "../components/FollowContext/FollowContext";
import { useContext, useState } from "react";

function OtherProfil() {
	const { toggleFollow } = useContext(FollowContext);
	const users = useUserData();
	const user = users[1];
	const [isFollowing, setIsFollowing] = useState(false);

	if (!user) return <p>Chargement...</p>;

	const handleFollow = () => {
		toggleFollow(isFollowing); // met a jour le compteur
		setIsFollowing(!isFollowing); // met a jour le boutton
	};

	return (
		<>
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
