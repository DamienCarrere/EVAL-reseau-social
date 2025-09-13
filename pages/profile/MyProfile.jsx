import useUserData from "../../API/useUserData";
import PostSelected from "../../components/Post/PostSelected";
import ProfileLayout from "../../components/Layout/ProfileLayout";

function MyProfile() {
	const users = useUserData();
	const user = users[0];

	if (!user) return <p>Chargement...</p>;

	return (
		<>
			<ProfileLayout user={user}>
				<p className="p-suivi">suivi :</p>
			</ProfileLayout>
			<PostSelected user={user.id} />
		</>
	);
}

export default MyProfile;
