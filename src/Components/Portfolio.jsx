/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/genai.jpg";

const imageAltText = "Bing Chat AI generated image of some microsfties around a conference booth";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tedx Perth - Where Have All The Girls Gone? ",
    description:
      "A talk about how you shouldn't listen to that voice in your head that holds you back from opportunity",
    url: "https://youtu.be/R6UODmQXzIs?si=xVmTd2p02DG6rl6T",
  },
  {
    title: "Well Connected - Small Steps You Can Take to Increase Your Impact",
    description:
      "How to use LinkedIn to Establish credibility from a distance, Influence by volume, Access all areas from the factory floor to the Board Room and use these skills to position yourself for the career you want to achieve",
    url: "https://youtu.be/ws_aGqYAqcE?si=JGTxXCb32Zo9oSg4",
  },
  {
    title: "GitHub CoPilot and Codespaces with Michelle ",
    description:
      "A live demo showing how to use codespaces and copilot to build a game",
    url: "https://youtu.be/cd2DLd1eFeM?si=cXC7s6ZKPW_w0Qxo",
  },
  {
    title: "The Modern Trolley Problem",
    description:
      "A talk about Ethics, Responsible AI, Autonomous Vehicles and Azure Custom Vision.",
    url: "https://youtu.be/nla1LGT83FE?si=DTKpi-BqFJ5efglZ",
  },
  {
    title: "Has Your Puppy Joined the Dark Side",
    description:
      "A live coding demo showing how to build a PWA Azure Static Website with custom vision AI built into the browser.",
    url: "https://www.youtube.com/live/ZaV6tGFNL8g?si=ao71sh4D0Iio2nPS",
  },
  {
    title: "New Breakpoint: Revolutionising the Developer Experience",
    description:
      "Video interview with Mish Mannering from GitHub on Copilot, Codespaces, GitHub Projects and more.",
    url: "https://youtu.be/CZLnZOeqGvc?si=602B0MpFn7diokP9",
  },
];
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
