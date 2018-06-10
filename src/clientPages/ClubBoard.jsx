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
  Nav,
  Button,
  Table
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
            {this.state.clubName + " 홈"}
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
        <Table>
          <thead>
            <tr>
              <th>글제목</th>
              <th>작성자</th>
              <th>작성시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> There is no data to show </td>
              <td> good </td>
              <td> job </td>
            </tr>
            <tr>
              <td> There is no data to show </td>
              <td> good </td>
              <td> job </td>
            </tr>
          </tbody>
        </Table>
        <Button type="primary" href={"/view/"+this.state.clubName+"/writeOnBoard"}>글쓰기</Button>
      </div>
    );
    return <div>{header}</div>;
  }
}
