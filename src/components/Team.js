import divider from "../assets/dividers/divider_team.svg";
import team from "../assets/team.json";

// import icons
import linkedin_icon from "../assets/icons/linkedin.svg";
import github_icon from "../assets/icons/github.svg";
import email_icon from "../assets/icons/email.svg";

const Team = () => {
	return (
		<section className="Team" id="team">
			<article className="max-width">
				<h2 className="section-title">Meet the Team</h2>
				<p className="section-description">These are the people who made the event possible!</p>

				<h2 className="section-title">COMING SOON!</h2>

				{/* <ul className="team-container">
					{Object.keys(team).map((rank, i) => (
						<li className={rank} key={i}>
							<ul className="team-rank">
								{team[rank].map(({ name, title, image, pronouns, linkedin, github, email }, i) => (
									<li className="team-member" key={i}>
										<img className="member-image" src={image} alt={name} />
										<p className="member-name">
											{name}
											<span className="pronoun-separator">&#8226;</span>
											<span className="member-pronouns">{pronouns}</span>
										</p>
										<p className="member-title">{title}</p>
										<div className="contact-links">
											{linkedin && (
												<a className="icon" href={linkedin} rel="noreferrer" target="_blank">
													<img src={linkedin_icon} alt="linkedin icon" />
												</a>
											)}
											{github && (
												<a className="icon" href={github} rel="noreferrer" target="_blank">
													<img src={github_icon} alt="github icon" />
												</a>
											)}
											{email && (
												<a
													className="icon"
													href={`mailto:${email}`}
													rel="noreferrer"
													target="_blank"
												>
													<img src={email_icon} alt="linkedin icon" />
												</a>
											)}
										</div>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul> */}
			</article>
			<img className="divider" src={divider} aria-hidden="true" alt="" />
		</section>
	);
};

export default Team;
