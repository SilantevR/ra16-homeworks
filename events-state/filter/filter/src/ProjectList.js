import { Component } from "react";
import Card from "./Card";

export default class ProjectList extends Component {
  render() {
    return (
      <div className="project_list">
        {this.props.projects.map((project) => {
          return <Card src={project.img} category={project.category} />;
        })}
      </div>
    );
  }
}
