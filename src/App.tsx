import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="app-container">
			<Header />
			<Body>
				<h1>Lorem title h1 </h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					quis ligula in nunc iaculis pharetra ac eget quam. Quisque suscipit
					tristique placerat. Ut eu vehicula mauris. Sed pellentesque iaculis
					erat, ac pretium diam efficitur vel. Suspendisse non libero iaculis,
					fermentum neque in, consectetur leo. Etiam aliquam egestas orci nec
					rhoncus. Praesent aliquet sapien velit, vel pulvinar nibh imperdiet
					non. Nulla facilisi.
				</p>
				<p>
					Suspendisse at nulla pulvinar, suscipit ex nec, egestas metus. Nunc
					velit elit, elementum a tortor vitae, ornare tempus ex. Donec
					fringilla dolor nulla, non consequat nibh sollicitudin vulputate.
					Fusce congue rutrum tortor, in ullamcorper massa dignissim nec.
					Phasellus a sapien feugiat, posuere justo tempus, posuere ipsum.
					Maecenas ut lorem nec nisl feugiat viverra. Integer consectetur
					laoreet massa. Morbi ligula velit, ullamcorper non urna ac, tincidunt
					cursus arcu. Curabitur sed libero luctus, ullamcorper magna ut, semper
					nibh. Proin rhoncus lacinia euismod. Nunc orci erat, iaculis lacinia
					mauris vitae, hendrerit tincidunt lorem.
				</p>
			</Body>
			<Footer />
		</div>
	);
}

export default App;
