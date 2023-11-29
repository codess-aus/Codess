/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/crowd1.jpg";

const imageAltText = "a crowd at a tech conference";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Developer Engagement Lead @ Microsoft - Azure Data Science & AI Certified";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Developer relations",
  "Mentoring",
  "Conference Speaker",
  "Games industry advocate",
  "Microsoft Certified Trainer",
  "Open Sourcerer",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Tedx Speaker, developer community mentor, Microsoftie and international conference Speaker. I live at the heart of the coding community and help drive awareness and engagement as a developer advocate and technology evangelist. I advocate for STEM, the Games Industry and Developers. I present at around 50 Conferences and Events around the world on Technology, Learning to Code, Open Source and Building Bots. I judge hackathons and encourage the next generation into technology careers. ";

import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      {/* <img className="about__background" src={image} alt={imageAltText} />/ */}
      <div className="about__content">
        <h2>About Myself</h2>
        <p className="about__description">{description}</p>
        <hr />
        <ul className="about__skills">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="about__detail">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
