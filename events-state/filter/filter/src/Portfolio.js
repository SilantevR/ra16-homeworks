import { Component } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

export default class Portfolio extends Component {
  filters = ["All", "Websites", "Flayers", "Business Cards"];
  state = {
    selected: "All",
    projects: this.props.data,
  };

  SelectFilter = (event) => {
    let selectedElement = event.target.innerHTML;
    if (this.state.selected === selectedElement) {
      return;
    }
    if (selectedElement === "All") {
      this.setState({
        selected: selectedElement,
        projects: this.props.data,
      });
      return;
    }
    this.setState({
      selected: selectedElement,
      projects: this.props.data.filter(
        (item) => item.category === selectedElement
      ),
    });
  };

  render() {
    return (
      <div className="portfolio">
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={this.SelectFilter}
        />
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}
