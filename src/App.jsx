import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import Footer from "../components/Header&Footer/Footer";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main></main>
				<Footer />
				<Routes>
					<Route path="/" element={"Home"} />
					<Route path="/search" element={"Search"} />
					<Route path="/disconnect" element={"Disconnect"} />
					<Route path="/profile" element={"Profile"} />
					<Route path="*" element={"Error 404"} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
