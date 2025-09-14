import "./Header&Footer.css";
import logo from "../../logo/logo.png";

export default function Header() {
	return (
		<header className="header">
			<img
				className="logo"
				src={logo}
				alt="Logo"
				width="100px"
				height="auto"
			></img>
		</header>
	);
}
