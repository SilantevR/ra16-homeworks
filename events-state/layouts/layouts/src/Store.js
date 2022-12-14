import { Component } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

export default class Store extends Component {
  icons = ["dashboard", "list"];

  state = {
    icon: "dashboard",
  };

  switch = (event) => {
    let index = this.icons.indexOf(event.target.innerHTML);
    if (index === 0) {
      this.setState({
        icon: "list",
      });
    } else {
      this.setState({
        icon: "dashboard",
      });
    }
  };
  render() {
    if (this.state.icon === "dashboard") {
      return (
        <div className="container">
          <IconSwitch icon={this.state.icon} onSwitch={this.switch} />
          <CardsView cards={this.props.products} />
        </div>
      );
    } else if (this.state.icon === "list") {
      return (
        <div className="container">
          <IconSwitch icon={this.state.icon} onSwitch={this.switch} />
          <ListView items={this.props.products} />
        </div>
      );
    }
  }
}
