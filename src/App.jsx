import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import Accueil from "../pages/Accueil";
import Footer from "../components/Header&Footer/Footer";
import Connexion from "../pages/Connexion";
import MyProfile from "../pages/profile/MyProfile";
import OtherProfil from "../pages/OtherProfil";
import "./App.css";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
	const [isLogIn, setIsLogIn] = useState(!!localStorage.getItem("userID"));

	return (
		<>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						{!isLogIn ? (
							<>
								<Route path="/" element={<Connexion setIsLogIn={setIsLogIn} />} />
								<Route path="*" element={<Navigate to="/" />} />
							</>
						) : (
							<>
								<Route path="/" element={<Accueil />} />
								<Route path="/profile" element={<MyProfile />} />
								<Route path="/otherProfil" element={<OtherProfil />} />
								<Route path="*" element={"Error 404"} />
							</>
						)}
					</Routes>
				</main>
				<Footer setIsLogIn={setIsLogIn} isLogIn={isLogIn} />
			</BrowserRouter>
		</>
	);
}

export default App;
