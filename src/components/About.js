import divider from "../assets/dividers/divider_about.svg";

// Import Sticky Notes
import stickyNote1 from "../assets/stickyNotes/sticky_note_1.svg";
import stickyNote2 from "../assets/stickyNotes/sticky_note_2.svg";
import stickyNote3 from "../assets/stickyNotes/sticky_note_3.svg";

// Import participation step images
import step1 from "../assets/participateSteps/step_1.svg";
import step2 from "../assets/participateSteps/step_2.svg";
import step3 from "../assets/participateSteps/step_3.svg";
import step4 from "../assets/participateSteps/step_4.svg";

const About = () => {
	return (
		<section className="About" id="about">
			<section className="about-description max-width">
				<article>
					<h2>What is AdaHacks?</h2>
					<p className="about-text">
						AdaHacks is a 24-hour in-person hackathon dedicated to empowering women and gender-diverse individuals to grow as innovators, leaders, and creative-thinkers in a traditionally underrepresented industry. We aim to create a supportive environment where every hacker feels welcome.
					</p>
					<p className="about-text">
						Everyone, regardless of gender or experience level, is welcome to participate!
					</p>
				</article>
			</section>

			<section className="about-steps">
				{/* <h2>How to Participate</h2> */}
				<ul className="participation-steps">
					<li className="step">
						<img src={step1} alt="People talking while drinking coffee" />
						<article>
							<h3 className="step-name">1. Form a Team</h3>
							<p className="step-description">
								Gather in teams of 2-5 to work with all weekend. Don't forget your snazzy team name!
							</p>
						</article>
					</li>
					<li className="step">
						<img src={step2} alt="Woman picking one multiple choice option" />
						<article>
							<h3 className="step-name">2. Choose a Stream and a Challenge</h3>
							<p className="step-description">
								Choose a stream to compete in, UI/UX or the general stream!
							</p>
						</article>
					</li>
					<li className="step">
						<img src={step3} alt="Man in room working on computer" />
						<article>
							<h3 className="step-name">3. Design and Create</h3>
							<p className="step-description">
								Get to brainstorming, coding, building, and designing, using your favourite languages and tools to create your masterpiece!
							</p>
						</article>
					</li>
					<li className="step">
						<img src={step4} alt="Two people high-fiving" />
						<article>
							<h3 className="step-name">4. Submit and Win!</h3>
							<p className="step-description">
								Submit and present your work to our judges for a chance to win prizes!
							</p>
						</article>
					</li>
				</ul>
			</section>

			<img className="divider" src={divider} aria-hidden="true" alt="" />
		</section>
	);
};

export default About;
