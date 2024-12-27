import { useTranslation } from "react-i18next";
import guzzuLogo from "../../assets/images/guzzu-black-logo.png";
import "./Header.css";

const Header = () => {
	const { i18n } = useTranslation();

	const handleLanguageChange = (event: {
		target: { value: string | undefined };
	}) => {
		i18n.changeLanguage(event.target.value);
	};
	return (
		<header className="header">
			<img className="logo" src={guzzuLogo} alt="Logo" />
			<select className="language-selector" onChange={handleLanguageChange}>
				<option value="en">EN</option>
				<option value="es">ES</option>
			</select>
		</header>
	);
};

export default Header;
