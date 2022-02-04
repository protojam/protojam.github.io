import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Hero />
			<About />
		</div>
	);
};

export default App;
