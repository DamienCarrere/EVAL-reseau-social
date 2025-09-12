import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import Accueil from "../pages/Accueil";
import Footer from "../components/Header&Footer/Footer";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Accueil />} />
					<Route path="/search" element={"Search"} />
					<Route path="/disconnect" element={"Disconnect"} />
					<Route path="/profile" element={"Profile"} />
					<Route path="*" element={"Error 404"} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
