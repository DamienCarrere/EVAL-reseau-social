import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import Accueil from "../pages/Accueil";
import Footer from "../components/Header&Footer/Footer";
import Connexion from "../pages/Connexion";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Footer />
				<Routes>
					<Route path="/" element={<Accueil />} />
					<Route path="/search" element={"Search"} />
					<Route path="/disconnect" element={<Connexion />} />
					<Route path="/profile" element={"Profile"} />
					<Route path="*" element={"Error 404"} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
