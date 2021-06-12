import React from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import "../styles/accommodation.scss";
import Gallery from "../components/gallery";
import Main from "./acc_main";
import json from "../../data.json";

class Accommodation extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.accommodation = json.find((entry) => entry.id === this.id);
  }

  render() {
    return this.accommodation === undefined ? (
      <Redirect to="/404" />
    ) : (
      <div className="accommodation">
        <Gallery accommodation={this.accommodation} />
        <Main accommodation={this.accommodation} range="5" />
      </div>
    );
  }
}

export default withRouter(Accommodation);
