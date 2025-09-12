import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import NavBar from "../components/Navbar/NavBar";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<NavBar />
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
