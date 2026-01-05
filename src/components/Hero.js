import hero from "../assets/hero.svg";
import divider from "../assets/dividers/divider_hero.svg";

const Hero = () => {
	return (
		<section className="Hero" id="main">
			<div className="hero-content max-width">
				<img className="hero-image" src={hero} alt="Aliens helping each other decorate a space" />

				<article>
					<h1 className="hero-title">ProtoJam 2024</h1>
					<p className="hero-description">
						A 36 hour in-person hackathon dedicated to empowering women and gender-diverse individuals to grow as innovators, leaders, and creative-thinkers in a traditionally underrepresented industry.
					</p>
					<p className="hero-date">March 6-8, 2026</p>
					<a href="#register" className="solid">
						Register Now!
					</a>
				</article>
			</div>

			<img className="divider" src={divider} aria-hidden="true" alt="" />
		</section>
	);
};

export default Hero;
