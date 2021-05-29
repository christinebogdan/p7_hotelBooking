import React from "react";
import { withRouter } from "react-router";

class Accommodation extends React.Component {
  // what is this syntax:
  // let { match {params}} = this.props;

  render() {
    return (
      <div>
        <h1>Hi</h1>
        <p>This is the id: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default withRouter(Accommodation);
