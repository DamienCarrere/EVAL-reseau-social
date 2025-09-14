import NavBar from "../Navbar/NavBar";
import "./Header&Footer.css";

export default function Footer({ setIsLogIn, isLogIn }) {
	return (
		<footer className="footer">
			<NavBar setIsLogIn={setIsLogIn} isLogIn={isLogIn} />
			<p id="footerText">© ClapiClap 2025, All Rights Reserved.</p>
		</footer>
	);
}
