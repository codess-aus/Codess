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
import "./Portfolio.css";

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
    title: "Unlocking the Code of Life",
    description:
      "A talk about how you can use GitHub Copilot to overcome Imposter Syndrome",
    url: "https://youtu.be/J9Qjks3d7Yg?si=cdJs4jojKth9s_vQ",
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
    <section className="padding portfolio" id="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <div className="portfolio__content">
        <div className="portfolio__image-container">
          <img
            src={image}
            className="portfolio__image"
            alt={imageAltText}
          />
        </div>
        <div className="portfolio__projects-container">
          {projectList.map((project) => (
            <div className="portfolio__project-box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="portfolio__project-title">{project.title}</h3>
              </a>
              <p className="portfolio__project-description small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
