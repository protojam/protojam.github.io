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
					<h2>What is ProtoJam?</h2>
					<p className="about-text">
						ProtoJam 2024 is a three day long, no-code design competition - a designathon - where
						students tackle design challenges focused on UX/UI design (user experience and user
						interface).
					</p>
					<p className="about-text">
						Technology for good - our theme for this year. We want to encourage young minds to use
						their skills for social change, so our design challenges are centered around causes for
						local non-profit organizations.
					</p>
					<p className="about-text">
						Unleash your creativity and make a positive difference, Join us in person or virtually!
					</p>
				</article>

				<div className="sticky-notes">
					<img
						className="sticky-note n1"
						src={stickyNote1}
						alt="Sticky note saying Students in highschool or university are invited to participate!"
					/>
					<img
						className="sticky-note"
						src={stickyNote2}
						alt="Sticky note saying ProtoJam is completely free & virtual!"
					/>
					<img
						className="sticky-note"
						src={stickyNote3}
						alt="Sticky note saying Every skill level is welcome - we'll provide workshops and resources to set you up for success!"
					/>
				</div>
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
							<h3 className="step-name">2. Choose a Challenge</h3>
							<p className="step-description">
								Choose a design challenge by a nonprofit! You'll be given detailed instructions
								about the task.
							</p>
						</article>
					</li>
					<li className="step">
						<img src={step3} alt="Man in room working on computer" />
						<article>
							<h3 className="step-name">3. Design and Create</h3>
							<p className="step-description">
								Get to sketching, then use your favourite prototyping tool (eg. Figma, Adobe XD,
								Sketch) to create your design masterpiece!
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
