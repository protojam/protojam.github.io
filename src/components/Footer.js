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
					<a className="solid" href="mailto:adasteam@ualberta.ca">
						Contact AdaHacks
					</a>
				</div>

				<div className="adas-team">
					<p>
						AdaHacks is an initiative created by Ada's Team, a student group from the University of
						Alberta that seeks to promote diversity and inclusivity in technology.
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
