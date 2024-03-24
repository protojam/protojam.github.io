import divider from "../assets/dividers/divider_supporters.svg";
import supporters from "../assets/supporters.json";

const Supporters = () => {
	return (
		<section className="Supporters" id="supporters">
			<article className="max-width">
				<h2 className="section-title">Supporters</h2>
				<p className="section-description">
					Special thanks to our wonderful supporters of ProtoJam!
				</p>

				<h2 className="section-title">COMING SOON!</h2>

				<ul className="tier-list">
					{Object.keys(supporters).map((supporter_tier, i) => {
						const tier_array = supporters[supporter_tier];

						if (tier_array.length > 0)
							return (
								<li className={`tier ${supporter_tier}`} key={`tier-${i}`}>
									<h3 className="tier-title">{supporter_tier}</h3>
									<ul className={`supporter-list ${supporter_tier}`}>
										{tier_array.map(({ sponsorName, sponsorImage, sponsorLink }, i) => (
											<li className="supporter" key={i}>
												{sponsorLink ? (
													<a href={sponsorLink} target="_blank" rel="noreferrer">
														<img src={sponsorImage} alt={`${sponsorName} logo`} />
													</a>
												) : (
													<img src={sponsorImage} alt={`${sponsorName} logo`} />
												)}
											</li>
										))}
									</ul>
								</li>
							);
						else return "";
					})}
				</ul>

				<p className="description">
					Would you like to support ProtoJam? <br />
					{/* Feel free to <a href="mailto:protojam@adasteam.ca">contact</a> us, we'd love to have you! */}
					Feel free to <a href="mailto:adasteam@ualberta.ca">contact</a> us, we'd love to have you!
				</p>
			</article>

			<img className="divider" src={divider} aria-hidden="true" alt="" />
		</section>
	);
};

export default Supporters;
