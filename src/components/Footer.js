// Import Icons
import website from "../assets/icons/website.svg";
import email from "../assets/icons/email_register.svg";
import instagram from "../assets/icons/instagram.svg";
import discord from "../assets/icons/discord.svg";

const Footer = () => (
	<section className="Footer" id="footer">
		<footer>
			<div className="footer-container max-width">
				<div className="contact" id="contact">
					<p>Questions or Concerns?</p>
					{/* <a className="solid" href="mailto:protojam@adasteam.ca"> */}
					<a className="solid" href="mailto:adasteam@ualberta.ca">
						Contact ProtoJam
					</a>
				</div>

				<div className="adas-team">
					<p>
						ProtoJam is an initiative created by Ada's Team, a student group from the University of
						Alberta that seeks to promote diversity in S.T.E.A.M, particularly in the tech industry.
					</p>

					<div className="contact-info">
						<a className="icon" href="https://adasteam.ca/" target="_blank" rel="noreferrer">
							<img src={website} alt="website icon" />
						</a>
						<a className="icon" href="mailto:adasteam@ualberta.ca" target="_blank" rel="noreferrer">
							<img src={email} alt="envelope icon" />
						</a>
						<a
							className="icon"
							href="https://www.instagram.com/adas_team/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={instagram} alt="instagram icon" />
						</a>
						<a
							className="icon"
							href="https://discord.gg/h5dKPbfNMJ"
							target="_blank"
							rel="noreferrer"
						>
							<img src={discord} alt="discord icon" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	</section>
);

export default Footer;
