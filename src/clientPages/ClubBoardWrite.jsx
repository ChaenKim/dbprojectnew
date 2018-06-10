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
  Table,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row
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
    const forms = (
      <div>
        <Form>
          <FormGroup row>
            <Label for="title" sm={2}>
              글 제목
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="글 제목을 입력하세요"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="text" sm={2}>
              내용
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="text" />
            </Col>
          </FormGroup>
          <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 전체공개
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 회원공개
              </Label>
            </FormGroup>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
    return <div>{forms}</div>;
  }
}
