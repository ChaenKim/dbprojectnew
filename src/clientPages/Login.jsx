import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class Login extends Component {
  submitBtn(){
    return;
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">아주대학교 이메일</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@ajou.ac.kr"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">비밀번호</Label>
            <Input
              type="password"
              id="examplePassword"
              placeholder="5자 이상"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">비밀번호 재입력</Label>
            <Input
              type="password"
              id="examplePassword"
              placeholder="한번 더 입력"
            />
          </FormGroup>
          <Button onClick={()=>this.SubmitButtonClicked()}>Submit</Button>
        </Form>
      </div>
    );
  }
}
