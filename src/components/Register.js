import { useEffect } from "react";

// Import Icons
import website from "../assets/icons/website.svg";
import email from "../assets/icons/email_register.svg";
import instagram from "../assets/icons/instagram.svg";
import discord from "../assets/icons/discord.svg";

const Register = () => {
	useEffect(() => {
		const script = document.createElement("script");
		const url = "https://www.eventbrite.com/static/widgets/eb_widgets.js";

		script.src = url;
		script.async = true;

		document.body.appendChild(script);

		const eventbriteInterval = setInterval(() => {
			if (window.EBWidgets) {
				window.EBWidgets.createWidget({
					// Required
					widgetType: "checkout",
					eventId: "261633281187",
					iframeContainerId: "eventbrite-widget-container-261633281187",

					// Optional
					iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
				});

				clearInterval(eventbriteInterval);
			}
		}, 1000);

		return () => {
			clearInterval(eventbriteInterval);
			document.body.removeChild(script);
		};
	}, []);

	return (
		<section className="Register" id="register">
			<article className="max-width">
				<h2 className="section-title">Register</h2>
				<p className="section-description">
					Join in on the fun for ProtoJam 2022!
					<br />
					Registration open until February 25 @ 4PM MDT.
				</p>
				<div className="eventbrite" id="eventbrite-widget-container-261633281187"></div>
			</article>

			<footer>
				<div className="footer-container max-width">
					<div className="contact" id="contact">
						<p>Questions or Concerns?</p>
						<a className="solid" href="mailto:protojam@adasteam.ca">
							Contact ProtoJam
						</a>
					</div>

					<div className="adas-team">
						<p>
							ProtoJam is an initiative created by Ada's Team, a student group from the University
							of Alberta that seeks to promote diversity in S.T.E.A.M, particularly in the tech
							industry.
						</p>

						<div className="contact-info">
							<a className="icon" href="https://adasteam.ca/" target="_blank" rel="noreferrer">
								<img src={website} alt="website icon" />
							</a>
							<a
								className="icon"
								href="mailto:adasteam@ualberta.ca"
								target="_blank"
								rel="noreferrer"
							>
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
};

export default Register;
