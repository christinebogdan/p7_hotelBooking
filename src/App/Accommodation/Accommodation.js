import React from "react";
import { withRouter } from "react-router";
import "./Accommodation.scss";
import Gallery from "./Gallery/Gallery";
import Main from "./Main/Main";
import json from "../../data.json";

class Accommodation extends React.Component {
  // why does this not work outside of render method?
  // const {match: {params: {id}}} = this.props;

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    return (
      <div className="accommodation">
        <Gallery id={id} />
        <Main
          id={id}
          rating={json[id].rating}
          range="5"
          tags={json[id].tags}
          amenities={json[id].Amenities}
          description={json[id].description}
        />
      </div>
    );
  }
}

export default withRouter(Accommodation);
