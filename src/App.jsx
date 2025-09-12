import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import Accueil from "../pages/Accueil";
import Footer from "../components/Header&Footer/Footer";
import ErrorNotFound from "../pages/error404/error404";
import "./App.css";
import MyProfile from "../pages/profile/Profile";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Accueil />} />
						<Route path="/search" element={"Search"} />
						<Route path="/disconnect" element={"Disconnect"} />
						<Route path="/profile" element={<MyProfile />} />
						<Route path="*" element={<ErrorNotFound />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
