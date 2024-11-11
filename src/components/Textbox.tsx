import React from "react";
import Hashtags from "./Hashtags";

const Textbox = ({ collisionItem }: { collisionItem: string }) => {
	return (
		<div
			style={
				collisionItem.length > 0 ? { display: "block" } : { display: "none" }
			}
		>
			<div className="textbox">
				{collisionItem === "immersingEnglishDocumentationDL" ? (
					<div className="multiple-image-container">
						<Hashtags hashtags={["design", "user-stories", "documentation"]} />
						<p>
							The{" "}
							<a
								href="https://woolen-guan-425.notion.site/Immersing-English-13701b16cedc80e2aeeade653e388c80"
								target="_blank"
								rel="noreferrer"
							>
								Immersing English documentation
							</a>{" "}
							describes in detail the planning, content modeling, component
							libary and more that went into designing and prototyping of the
							project!
						</p>
						<p>
							Immersing English was designed with accessibility in mind
							considering User Personas, User Stories Journeys and Map, and
							Design Guidelines.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "immersingEnglishWebsiteDL" ? (
					<div className="multiple-image-container">
						<Hashtags
							hashtags={["react", "typescript", "UI/UX", "front-end", "framer"]}
						/>
						<p>
							<a
								href="https://immersing-english-2.framer.ai/"
								target="_blank"
								rel="noreferrer"
							>
								Immersing English
							</a>{" "}
							is a web app concept designed to curate level appropriate native
							media for Enlgish learners.
						</p>
						<p>
							It was developed with custom React/ TS components to curate (sort
							and filter) language content. The user centered experience was
							prototyped with Framer using Notion as a back-end.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "trackJumpPhotoDL" ? (
					<div className="image-left-container">
						<div className="image-gallery-1">
							<img
								className="ui-image"
								src="./images/workout/highSchoolJump.png"
								alt="Geoff Triple Jumping"
								style={{ maxWidth: "30rem" }}
							/>
						</div>
						<p>
							Geoff has always had a passion for athletics. Here he is competing
							in triple jump, a track and field event, his senior year of high
							school.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "legSenseDL" ? (
					<div className="multiple-image-container">
						<Hashtags
							hashtags={[
								"arduino",
								"electronics-integration",
								"hardware",
								"movement-capture",
							]}
						/>
						<div className="image-gallery-3">
							<img src="./images/workout/legSense/IMU.png" alt="IMU" />
							<img
								src="./images/workout/legSense/hardware.png"
								alt="leg sense hardware"
							/>
							<img
								src="./images/workout/legSense/demonstration.png"
								alt="Leg sense demonstration"
							/>
						</div>
						<p>
							LegSense is a product designed to aid athletics and weightlifters
							as well as doctors and physical therapists. It is well documented
							by a{" "}
							<a
								href="./documentation/LegSense_Documentation.pdf"
								target="_blank"
								rel="noreferrer"
							>
								publication in the Sigma Journal
							</a>
							.
						</p>
						<p>
							This{" "}
							<a
								href="https://youtu.be/O48rYTpQVfc"
								target="_blank"
								rel="noreferrer"
							>
								video demonstration
							</a>{" "}
							shows LegSense in action!
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "trackHurdlesPhotoDL" ? (
					<div className="image-left-container">
						<div className="image-gallery-1">
							<img
								className="ui-image"
								src="./images/workout/collegeHurdles.png"
								alt="Geoff Hurdling"
								style={{ maxWidth: "30rem" }}
							/>
						</div>
						<p>
							Geoff competing in 110m hurdles, a track and field event, his
							senior year of college
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "csse280WorkoutTrackerDL" ? (
					<div className="multiple-image-container">
						<Hashtags
							hashtags={[
								"front-end",
								"vanilla-javascript",
								"user-data",
								"firebase",
							]}
						/>
						<div className="image-gallery-3">
							<img
								className="ui-image"
								src="./images/workout/csse280/login.png"
								alt="workout tracker login"
								style={{ maxWidth: "20rem" }}
							/>

							<img
								className="ui-image"
								src="./images/workout/csse280/calendar.png"
								alt="workout tracker calendar"
								style={{ maxWidth: "20rem" }}
							/>
							<iframe
								title="workout tracker"
								width="420"
								height="315"
								src="https://www.youtube.com/embed/BsaxbthQHSw"
							/>
						</div>
						<p>
							<a
								href="https://workout-tracker-csse280.web.app/"
								target="_blank"
								rel="noreferrer"
							>
								Workout Tracker
							</a>{" "}
							is a web app solution designed to aid athletes track and store
							their data for running and weightlifting. It was created with
							HTML/CSS/vanilla JS and uses firebase as the back-end to store
							user data.
						</p>
						<p>
							Enjoy this{" "}
							<a
								href="https://www.youtube.com/watch?v=BsaxbthQHSw"
								target="_blank"
								rel="noreferrer"
							>
								demonstration video
							</a>{" "}
							of the capabilities of Workout Tracker!
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "seniorDesignDL" ? (
					<div className="multiple-image-container">
						<Hashtags
							hashtags={[
								"electronics-integration",
								"hardware",
								"movement-capture",
								"UWB",
								"raspberry-pi",
							]}
						/>
						<div className="image-gallery-3">
							<img
								className="ui-image"
								src="./images/workout/wonderWalker/wonderWalkerHardware.png"
								alt="wonder walker hardware"
								style={{ maxWidth: "20rem" }}
							/>

							<img
								className="ui-image"
								src="./images/workout/wonderWalker/wonderWalkerWebsite.png"
								alt="wonder walker websire"
								style={{ maxWidth: "20rem" }}
							/>
							<img
								className="ui-image"
								src="./images/workout/wonderWalker/musicMap.jpg"
								alt="wonder walker music map"
								style={{ height: "25rem" }}
							/>
						</div>
						<p>
							<a
								href="https://workout-tracker-csse280.web.app/"
								target="_blank"
								rel="noreferrer"
							>
								Wonder Walker
							</a>{" "}
							is a unique solution designed to aid blind and visually impaired
							individuals in learning new areas before they arrive as well as
							help them navigate these areas using a smart device and distinct
							auditory identifiers. The system is functioning in realistic
							environments and will play specific sounds based on a user
							location in the area with a custom website and hardware beacon
							system.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "combinationDL" ? (
					<div className="multiple-image-container">
						<Hashtags
							hashtags={[
								"electronics-integration",
								"Web-developement",
								"movement-capture",
								"ui/ux",
							]}
						/>
						<div className="image-gallery-3">
							<img
								className="ui-image"
								src="./images/workout/wonderWalker/wonderWalkerHardware.png"
								alt="wonder walker hardware"
								style={{ maxWidth: "20rem" }}
							/>
							<p>+</p>
							<img
								className="ui-image"
								src="./images/workout/legSense/demonstration.png"
								alt="legsense demo"
								style={{ maxWidth: "20rem" }}
							/>
							<p>+</p>

							<img
								className="ui-image"
								src="./images/workout/csse280/login.png"
								alt="workout tracker login"
								style={{ maxWidth: "20rem" }}
							/>
						</div>
						<p>
							Recently I've been working to combine my passions for electronics
							integration, web development, and athletics to create something
							fun and innovative.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "arduinoDL" ? (
					<div className="multiple-image-container">
						<Hashtags
							hashtags={[
								"electronics-integration",
								"arduino",
								"hardware",
								"prototype",
							]}
						/>
						<div className="image-gallery-3">
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<img
									className="ui-image"
									src="./images/workout/arduinoTracker/workoutStart.jpeg"
									alt="arduino workout start"
									style={{ minWidth: "15rem", maxWidth: "20rem" }}
								/>
								<img
									className="ui-image"
									src="./images/workout/arduinoTracker/workoutDone.jpeg"
									alt="arduino workout done"
									style={{ minWidth: "15rem", maxWidth: "20rem" }}
								/>
							</div>
							<iframe
								title="workout tracker"
								width="400"
								height="275"
								src="https://www.youtube.com/embed/kL6d6jasLW4"
							/>

							<iframe
								title="pullups tracker"
								width="400"
								height="275"
								src="https://www.youtube.com/embed/UBWpcnP7ZJc"
							/>
						</div>
						<p>
							Recently I've been working to combine my passions for electronics
							integration, web development, and athletics to create something
							fun and innovative. This is my first prototype of set and rep
							tracker during exercise.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "esp32DL" ? (
					<div className="multiple-image-container">
						<Hashtags
							hashtags={[
								"microcontroller",
								"electronics-integration",
								"hardware",
								"movement-capture",
								"prototype",
							]}
						/>
						<div className="image-gallery-3">
							<img
								className="ui-image"
								src="./images/workout/esp32Tracker/esp32.jpeg"
								alt="esp32 with IMU"
								style={{ maxWidth: "20rem" }}
							/>
							<img
								className="ui-image"
								src="./images/workout/esp32Tracker/pullups.png"
								alt="esp32 on pullup diagram"
								style={{ maxWidth: "20rem" }}
							/>
							<iframe
								title="pullups tracker"
								width="420"
								height="275"
								src="https://www.youtube.com/embed/YZU1RHA3Cq4"
							/>
						</div>
						<p>
							I'm working to automate the count of sets and repeitions by
							utilizing an IMU (gyroscope accelerometer magnetometer) and
							transmitting that data wirelessly with an ESP32 to be stored,
							analyzed, and later displayed.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "framerTrackerDL" ? (
					<div className="multiple-image-container">
						<Hashtags
							hashtags={[
								"Web-dev",
								"ui/ux",
								"react",
								"front-end",
							]}
						/>
						<div className="image-gallery-2">
							<img
								className="ui-image"
								src="./images/workout/trackerUI/demoUI.png"
								alt="esp32 with IMU"
								style={{ width:"auto", maxHeight: "15em" }}
							/>
							<img
								className="ui-image"
								src="./images/workout/trackerUI/demoComponents.png"
								alt="esp32 on pullup diagram"
								style={{ height:"30rem", width: "auto",  }}
							/>
						</div>
						<p>
							I've begun wireframing and constructing the component library for a mobile app that will present the data once it has been collected and stored.
						</p>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Textbox;
