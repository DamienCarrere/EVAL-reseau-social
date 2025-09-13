import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import Accueil from "../pages/Accueil";
import Footer from "../components/Header&Footer/Footer";
import Connexion from "../pages/Connexion";
import MyProfile from "../pages/profile/MyProfile";
import OtherProfil from "../pages/OtherProfil";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Accueil />} />
						<Route path="/search" element={"Search"} />
						<Route path="/disconnect" element={<Connexion />} />
						<Route path="/profile" element={<MyProfile />} />
						<Route path="*" element={"Error 404"} />
						<Route path="/otherProfil" element={<OtherProfil />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
