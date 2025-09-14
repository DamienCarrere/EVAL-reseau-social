import useUserData from "../API/useUserData";
import PostSelected from "../components/Post/PostSelected";
import ProfileLayout from "../components/Layout/ProfileLayout";
import { FollowContext } from "../components/FollowContext/FollowContext";
import { useContext, useEffect, useState } from "react";

function OtherProfil() {
	const { toggleFollow } = useContext(FollowContext);
	const users = useUserData();
	const user = users[6];
	const [isFollowing, setIsFollowing] = useState(false);

	useEffect(() => {
		if (!user?.id) return;
		const stored = localStorage.getItem(`isFollowing_${user.id}`);
		if (stored === "true") setIsFollowing(true);
	}, [user]);

	const handleFollow = () => {
		if (isFollowing) {
			toggleFollow(true);
			localStorage.setItem(`isFollowing_${user.id}`, "false");
		} else {
			toggleFollow(false);
			localStorage.setItem(`isFollowing_${user.id}`, "true");
		}
		setIsFollowing(!isFollowing);
	};

	if (!user) return <p>Chargement...</p>;

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
