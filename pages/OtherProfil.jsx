import useUserData from "../API/useUserData";
import PostSelected from "../components/Post/PostSelected";
import ProfileLayout from "../components/Layout/ProfileLayout";

function OtherProfil() {
	const users = useUserData();
	const user = users[1];

	if (!user) return <p>Chargement...</p>;

	return (
		<>
			<ProfileLayout user={user}></ProfileLayout>
			<PostSelected userSelect={user.id} />
		</>
	);
}

export default OtherProfil;
