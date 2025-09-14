import { createContext, useEffect, useState } from "react";

export const FollowContext = createContext();

export const FollowProvider = ({ children }) => {
	const [followers, setFollowers] = useState(0);

	useEffect(() => {
		const stored = parseInt(localStorage.getItem("followers")) || 0;
		setFollowers(stored);
	}, []);

	const toggleFollow = (isFollowing) => {
		setFollowers((prev) => {
			const newCount = isFollowing ? prev - 1 : prev + 1;
			localStorage.setItem("followers", newCount);
			return newCount;
		});
	};

	return (
		<FollowContext.Provider value={{ followers, toggleFollow }}>
			{children}
		</FollowContext.Provider>
	);
};
