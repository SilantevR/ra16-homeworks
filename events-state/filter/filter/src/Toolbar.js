import { Component } from "react";
import Button from "./Button";

export default class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        {this.props.filters.map((filter) => {
          return (
            <Button
              text={filter}
              type="button"
              selected={this.props.selected}
              onSelect={this.props.onSelectFilter}
            />
          );
        })}
      </div>
    );
  }
}
