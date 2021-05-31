import React from "react";
import { withRouter } from "react-router";
import "./Accommodation.scss";
import Gallery from "./Gallery/Gallery";
import Main from "./Main/Main";

class Accommodation extends React.Component {
  // why does this not work outside of render method?
  // const {match: {params: {id}}} = this.props;

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    // let id = this.props.match.params.id;
    return (
      <div className="accommodation">
        <Gallery id={id} />
        <Main />
      </div>
    );
  }
}

export default withRouter(Accommodation);
