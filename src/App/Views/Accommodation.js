import React from "react";
import { withRouter } from "react-router";
import "../Styles/Accommodation.scss";
import Gallery from "../Components/Gallery";
import Main from "./Acc_Main";
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
