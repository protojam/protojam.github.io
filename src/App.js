import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NonProfits from "./components/NonProfits";
import Register from "./components/Register";
import Supporters from "./components/Supporters";
import Team from "./components/Team";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Hero />
			<About />
			<Supporters />
			<NonProfits />
			<Team />
			<Register />
		</div>
	);
};

export default App;
