import divider from "../assets/dividers/divider_about.svg";

const About = () => {
	return (
		<section className="About" id="about">
			<section className="about-text max-width">
				<article>
					<p className="about-text">
						ProtoJam 2022 is an online, weekend long, no-code design competition - a designathon -
						where students tackle design challenges focused on UX/UI design (user experience and
						user interface).
					</p>
					<p className="about-text">
						Technology for good - our theme for this year. We want to encourage young minds to use
						their skills for social change, so our design challenges are centered around causes for
						local non-profit organizations.
					</p>
				</article>

				<div className="sticky-notes">
					<p className="sticky-note">
						Students in highschool or univeristy are invited to participate!
					</p>
					<p className="sticky-note">ProtoJam is free to participate!</p>
					<p className="sticky-note">
						No skill level is required - we'll provide workshops and resources to set you up for
						success!
					</p>
					<p className="sticky-note">
						ProtoJam will be held online through a mix of Discord and Zoom!
					</p>
				</div>
			</section>

			<section className="about-steps"></section>

			<img className="divider" src={divider} aria-hidden="true" />
		</section>
	);
};

export default About;
