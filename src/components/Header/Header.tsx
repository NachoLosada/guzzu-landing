import guzzuLogo from "../../assets/images/guzzu-black-logo.png";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<img className="logo" src={guzzuLogo} alt="Logo" />
			<select className="language-selector">
				<option value="en">English</option>
				<option value="es">Español</option>
			</select>
		</header>
	);
};

export default Header;
