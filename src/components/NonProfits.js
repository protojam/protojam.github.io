import divider from "../assets/dividers/divider_nonprofits.svg";
import nonprofits from "../assets/nonprofits.json";

const NonProfits = () => {
	return (
		<section className="NonProfits" id="nonprofits">
			<article className="max-width">
				<h2 className="section-title">Design Challenge Hosts</h2>
				<p className="section-description">
					ProtoJam features design challenges hosted by the following organizations!
				</p>

				<ul className="nonprofit-list">
					{nonprofits.map(({ npName, npDescription, npLink, npImage }, i) => (
						<li className="nonprofit-card" key={npName}>
							<img src={npImage} alt={`${npName} logo`} />
							<h4 className="title">{npName}</h4>
							<p className="description">{npDescription}</p>
						</li>
					))}
				</ul>
			</article>

			<img className="divider" src={divider} aria-hidden="true" alt="" />
		</section>
	);
};

export default NonProfits;
