import React from "react";
import "./Singers.css";
export class Singers extends React.Component {
  render() {
    return (
      <div className="singers-pics">
        <div className="singers-data">
          <img src={this.props.banner} />
          <h1>{this.props.name}</h1>
          <h2>{this.props.details}</h2>
        </div>
      </div>
    );
  }
}
