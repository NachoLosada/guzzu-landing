import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="logo">Logo placeholder</div>
			<select className="language-selector">
				<option value="en">English</option>
				<option value="es">Español</option>
				<option value="ca">Català</option>
			</select>
		</header>
	);
};

export default Header;
