import Navbar from "./components/Navbar";
import Poirot from "./components/Poirot";
import Skills from "./components/Skills";
import About from "./components/About";
import Cases from "./components/Cases";

const App = () => {
	return (
		<>
			<Navbar />
			<Poirot />
			<About />
			<Skills />
			<Cases />
		</>
	);
};

export default App;
