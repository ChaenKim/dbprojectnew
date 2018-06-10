import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Collapse,
  Card,
  ListGroup,
  NavDropdown,
  Nav
} from "reactstrap";

export default class ViewPosts extends Component {
  constructor() {
    super();
    this.state = {
      clubName: ""
    };
  }

  async componentDidMount() {
    var history = this.props.history.location.pathname;
    history.replace(/%20/, " "); //replace escaped space
    var historySplit = history.split("/");
    var name = historySplit[2];
    await this.setState({ clubName: name });
  }

  render() {
    const header = (
        <div>
          <Breadcrumb tag="nav">
            <BreadcrumbItem tag="a" href={"/view/" + this.state.clubName}>
              {this.state.clubName+" 홈"}
            </BreadcrumbItem>
            <BreadcrumbItem
              tag="a"
              href={"/view/" + this.state.clubName + "/board"}
            >
              게시판
            </BreadcrumbItem>
            <BreadcrumbItem
              tag="a"
              href={"/view/" + this.state.clubName + "/photos"}
            >
              사진첩
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
    );
    return <div>{header}</div>;
  }
}
