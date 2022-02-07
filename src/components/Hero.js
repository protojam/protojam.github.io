import hero from "../assets/hero.svg";
import divider from "../assets/dividers/divider_hero.svg";

const Hero = () => {
	return (
		<section className="Hero" id="main">
			<div className="hero-content max-width">
				<img className="hero-image" src={hero} alt="Aliens helping each other decorate a space" />

				<article>
					<h1 className="hero-title">ProtoJam 2022</h1>
					<p className="hero-description">
						A virtual UX/UI Designathon promoting technology for good.
					</p>
					<p className="hero-date">February 25-27, 2022</p>
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
