import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Input, Label, Col } from "reactstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputemail: "",
      inputpw: ""
    };
  }

  emailOnChange(value) {
    this.setState({ inputemail: value });
  }

  async loginBtn() {
    // await this.setState({ classNameText: value });
    // fetch("http://localhost:8081/course_list/" + value)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(result => {
    //     var arrCourse = [" "];
    //     for (let i = 0; i < result.length; i++) {
    //       arrCourse.push(result[i].name);
    //     }
    //     this.setState({
    //       courseList: arrCourse
    //     });
    //   });
    return;
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="emailForm">이메일</Label>
            <Input
              value={this.state.required}
              onChange={event => this.emailOnChange(event.target.value)}
              type="email"
              id="emailForm"
            />
          </FormGroup>
          <FormGroup>
            <Label for="pwForm">비밀번호</Label>
            <Input type="password" id="pwForm" />
          </FormGroup>
          <Button onClick={() => this.loginBtn()}>로그인</Button>
        </Form>
      </div>
    );
  }
}
