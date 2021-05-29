import React from "react";
import { withRouter } from "react-router";
import "./Accommodation.scss";
import Gallery from "./Gallery/Gallery";
import Main from "./Main/Main";

class Accommodation extends React.Component {
  // what is this syntax:
  // let { match {params}} = this.props;

  render() {
    let id = this.props.match.params.id;
    return (
      <div className="accommodation">
        <Gallery id={id} />
        <Main />
      </div>
    );
  }
}

export default withRouter(Accommodation);
