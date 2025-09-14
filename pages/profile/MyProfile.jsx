import useUserData from "../../API/useUserData";
import PostSelected from "../../components/Post/PostSelected";
import ProfileLayout from "../../components/Layout/ProfileLayout";
import { FollowContext } from "../../components/FollowContext/FollowContext";
import { useContext } from "react";

function MyProfile() {
	const { followers } = useContext(FollowContext);
	const users = useUserData();
	const storedID = localStorage.getItem("userID");
	const userID = storedID ? parseInt(storedID, 10) : null;
	const user = users.find((u) => u.id === userID);

	if (!user) return <p>Chargement...</p>;

	return (
		<>
			<ProfileLayout user={user}>
				<p className="p-suivi">suivi : {followers}</p>
			</ProfileLayout>
			<PostSelected userSelect={user.id} />
		</>
	);
}

export default MyProfile;
