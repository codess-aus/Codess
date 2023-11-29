/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/NDC.jpg";

const imageAltText = "Adult female speaking at a conference";

import './Home.css';

const Home = ({ name, title }) => {
  return (
    <section id="home" className="home"> 
      <img className="home__background" src={image} alt="" />
      <div className="home__header">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="home__arrow">
        <img src={arrowSvg} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
