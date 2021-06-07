import React from "react";
import Collapse from "../Accommodation/Main/Collapse/Collapse";
import "./About.scss";

class About extends React.Component {
  render() {
    console.log("About is loaded");
    const textInput = {
      Reliability:
        "The ads posted on Kasa guarantee total reliability of the place. The photos are consistend with the accommodations, and all information is regularly checked by our teams.",
      Respect:
        "Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform.",
      Service:
        "Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions.",
      Safety:
        "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests.",
    };

    return (
      <ul className="about__main">
        {Object.keys(textInput).map((key, index) => {
          return (
            <li key={key}>
              <Collapse title={key} content={textInput[key]} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default About;
