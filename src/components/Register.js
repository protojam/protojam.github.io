import { useEffect } from "react";

const Register = () => {
	useEffect(() => {
		const script = document.createElement("script");
		const url = "https://www.eventbrite.com/static/widgets/eb_widgets.js";

		script.src = url;
		script.async = true;

		document.body.appendChild(script);

		const eventbriteInterval = setInterval(() => {
			// if (window.EBWidgets) {
			window.EBWidgets.createWidget({
				// Required
				widgetType: "checkout",
				eventId: "823318797687",
				iframeContainerId: "eventbrite-widget-container-823318797687",

				// Optional
				iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
			});

			clearInterval(eventbriteInterval);
			// }
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
					Join in on the fun for ProtoJam 2024!
					<br />
					Registration open until March 17 @ 11:59 PM MDT.
				</p>
				<div className="eventbrite" id="eventbrite-widget-container-823318797687"></div>
			</article>
		</section>
	);
};

export default Register;
