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
				{collisionItem === "immersingEnglishDocumentationCOIN" ? (
					<div className="multiple-image-container">
						<Hashtags hashtags={["design", "user-stories", "documentation"]} />
						<div className="image-gallery-3">
							<img
								className="ui-image"
								src="./images/english/documentation.png"
								alt="english documenation layout"
								style={{ maxHeight: "30rem", width: "auto" }}
							/>

							<img
								className="ui-image"
								src="./images/english/planning.png"
								alt="english planning"
								style={{ maxWidth: "50rem" }}
							/>
							<img
								className="ui-image"
								src="./images/english/components.png"
								alt="english components"
								style={{ maxWidth: "50rem" }}
							/>
						</div>
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
						<div className="image-gallery-1">
							<img
								className="ui-image"
								src="./images/english/website.png"
								alt="english website"
								style={{ maxWidth: "50rem" }}
							/>
						</div>
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
				{collisionItem === "trackJumpPhotoCOIN" ? (
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
							I've always had a passion for athletics. Here I am competing in
							triple jump, a track and field event, his senior year of high
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
							Me competing in 110m hurdles, a track and field event, his senior
							year of college
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "csse280WorkoutTrackerCOIN" ? (
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
								style={{ height: "25rem", width: "auto" }}
							/>
						</div>
						<p>
							<a
								href="./documentation/WonderWallkerDocumentation.pdf"
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
				{collisionItem === "combinationCOIN" ? (
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
				{collisionItem === "arduinoCOIN" ? (
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
				{collisionItem === "framerTrackerCOIN" ? (
					<div className="multiple-image-container">
						<Hashtags hashtags={["Web-dev", "ui/ux", "react", "front-end"]} />
						<div className="image-gallery-2">
							<img
								className="ui-image"
								src="./images/workout/trackerUI/demoUI.png"
								alt="workout tracker demo UI"
								style={{ width: "auto", maxHeight: "15em" }}
							/>
							<img
								className="ui-image"
								src="./images/workout/trackerUI/demoComponents.png"
								alt="workout tracker demo components"
								style={{ height: "30rem", width: "auto" }}
							/>
						</div>
						<p>
							I've begun wireframing and constructing the react component
							library with Framer for a mobile app that will present the data
							once it has been collected and stored.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "astroboticCOIN" ? (
					<div className="image-left-container">
						<div className="image-gallery-1">
							<img
								className="ui-image"
								src="https://www.nasa.gov/wp-content/uploads/2019/11/cmu_lunar_rover.jpg"
								alt="cuberover"
								style={{ maxWidth: "30rem" }}
							/>
						</div>
						<p>
							Fun fact: I spent a couple weeks (Summer 2019) helping out at the
							CMU robotics lab on a project called Cuberover (now Astrobotic)
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "armyDL" ? (
					<div className="multiple-image-container" style={{ width: "100%" }}>
						<Hashtags
							hashtags={[
								"communication",
								"collaboration",
								"fast-paced-team-environment",
							]}
						/>
						<div className="image-gallery-3">
							<img
								className="ui-image"
								src="./images/community/armyFitness.png"
								alt="army fitness"
								style={{ maxWidth: "20rem" }}
							/>
							<img
								className="ui-image"
								src="./images/community/armyFTX.png"
								alt="army ftx"
								style={{ maxWidth: "20rem" }}
							/>
							<img
								className="ui-image"
								src="./images/community/armyTeam.jpg"
								alt="esp32 on pullup diagram"
								style={{ maxWidth: "20rem" }}
							/>
						</div>
						<p>
							Four years of Army ROTC, including summer training at Fort Knox,
							taught me many lessons about teamwork, communication, and
							leadership.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "spanishDL" ? (
					<div className="multiple-image-container">
						<Hashtags hashtags={["communication", "community", "teamwork"]} />
						<div className="image-gallery-3">
							<img
								className="ui-image"
								src="./images/community/spanishPeru.jpg"
								alt="family mexico"
								style={{ maxWidth: "20rem" }}
							/>
							<img
								className="ui-image"
								src="./images/community/spanishCamino.JPG"
								alt="camino"
								style={{ maxWidth: "20rem" }}
							/>
							<img
								className="ui-image"
								src="./images/community/spanishFamilyMexico.JPG"
								alt="peru"
								style={{ maxWidth: "20rem" }}
							/>
						</div>
						<p>
							Learning Spanish has changed how I see and communicate with the
							world around me. I have been lucky to learn from living in Mexico
							during a foreign exchange (right), studying while aborad, and
							volunteering to teach with an English as second language program.
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "trackCOIN" ? (
					<div className="multiple-image-container">
						<Hashtags hashtags={["teamwork", "community", "pittsburgh"]} />
						<div className="image-gallery-2">
							<img
								className="ui-image"
								src="./images/community/trackWinchesterTeam.png"
								alt="WT track"
								style={{ maxWidth: "25rem" }}
							/>
							<img
								className="ui-image"
								src="./images/community/trackRoseTeam.png"
								alt="rose track"
								style={{ maxWidth: "40rem" }}
							/>
						</div>
					</div>
				) : (
					""
				)}
				{collisionItem === "pittCOIN" ? (
					<div className="multiple-image-container" style={{ width: "100%" }}>
						<Hashtags hashtags={["community", "pittsburgh", "family"]} />
						<div
							className="image-gallery-1"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<img
								className="ui-image"
								src="./images/community/pittFamily.JPEG"
								alt="family"
								style={{ maxWidth: "30rem" }}
							/>
						</div>
					</div>
				) : (
					""
				)}
				{collisionItem === "backwardsDesignDL" ? (
					<div className="multiple-image-container" style={{ width: "100%" }}>
						<Hashtags
							hashtags={["understanding-by-design", "4-freedoms-of-play"]}
						/>
						<div
							className="image-gallery-1"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<img
								className="ui-image"
								src="./images/portfolio/backwardDesign.png"
								alt="backward design"
								style={{ maxWidth: "30rem" }}
							/>
						</div>
					</div>
				) : (
					""
				)}

				{collisionItem === "spritesCOIN" ? (
					<div className="multiple-image-container" style={{ width: "100%" }}>
						<Hashtags hashtags={["art", "creativity", "fun"]} />
						<div
							className="image-gallery-1"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<img
								className="ui-image"
								src="./images/portfolio/libresprite.png"
								alt="sprites"
								style={{ maxWidth: "50rem" }}
							/>
						</div>
						<p>Making the sprites was a blast :)</p>
					</div>
				) : (
					""
				)}

				{collisionItem === "kaplayDL" ? (
					<div className="multiple-image-container" style={{ width: "100%" }}>
						<Hashtags hashtags={["vanilla-js", "web-dev", "software"]} />
						<div
							className="image-gallery-1"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<img
								className="ui-image"
								src="https://kaplayjs.com/_astro/kaplay-banner.SYsC3YBq_ZO4Fh7.webp"
								alt="kaplay"
								style={{ maxWidth: "50rem" }}
							/>
						</div>
						<p>
							Learning this new library was a ton of fun! I had no idea it
							existed. This is the first 'video game' I've made! :)
						</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "sprintCOIN" ? (
					<div className="multiple-image-container" style={{ width: "100%" }}>
						<Hashtags hashtags={["engineering", "sprint"]} />
						<div
							className="image-gallery-1"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<img
								className="ui-image"
								src="./images/portfolio/sprint.jpeg"
								alt="sprint"
								style={{ maxWidth: "50rem" }}
							/>
						</div>
						<p>
							I used an agile/ scrum like management system to organize and
							prioritize my tasks
						</p>
						<p>(Using cutting edge tech called sticky notes and cardboard)</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "tiledCOIN" ? (
					<div className="multiple-image-container" style={{ width: "100%" }}>
						<Hashtags hashtags={["art", "creativity"]} />
						<div
							className="image-gallery-1"
							style={{ display: "flex", justifyContent: "center" }}
						>
							<img
								className="ui-image"
								src="./images/portfolio/tiled.png"
								alt="sprint"
								style={{ maxWidth: "50rem" }}
							/>
						</div>
						<p>Woah meta map inside this map...</p>
						<p>Making the maps was super fun! Its kinda like Minecraft</p>
					</div>
				) : (
					""
				)}
				{collisionItem === "funCOIN" ? (
					<div className="multiple-image-container" style={{ width: "100%" }}>
						<p>
							This dinosaur has no real relevance. Just thought it looked cool!
							hehe
						</p>
						<p>Thanks for inspiring me to build this project!</p>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Textbox;
