import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Input, Label, Col } from "reactstrap";
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Button
// import { Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputname: "",
      inputphonenum: "",
      inputemail: "",
      inputpw: "",
      inputpwagain: "",
      emailInvalid: false,
      pwInvalid: false,
      pwagainInvalid: false,
      emailplaceholder: "example@ajou.ac.kr",
      pwplaceholder: "5자 이상 입력",
      pwagainplaceholder: "한번 더 입력해주세요"
    };
  }

  async nameOnChange(value) {
    await this.setState({ inputname: value });
    console.log(value);
  }
  async phoneNumOnChange(value) {
    await this.setState({ inputphonenum: value });
  }
  async emailOnChange(value) {
    await this.setState({ inputemail: value });
  }
  async pwOnChange(value) {
    await this.setState({ inputpw: value });
  }
  async pwAgainOnChange(value) {
    await this.setState({ inputpwagain: value });
  }

  async signupBtn(event) {
    var isEverythingValid = false;
    let name = this.state.inputname;
    let phoneNum = this.state.inputphoneNum;
    let email = this.state.inputemail;
    let pw = this.state.inputpw;
    let pwAgain = this.state.inputpwagain;
    if(name == "" || phoneNum == "" || email =="" || pw =="" || pwAgain ==""){
      window.alert("모든 사항을 입력하세요");
      return;
    }
    if (!email.includes("@")) {
      await this.setState({
        inputemail: "",
        emailInvalid: true,
        emailplaceholder: "이메일을 입력하세요"
      });
    } else if (pw.length < 5) {
      await this.setState({
        inputpw: "",
        emailInvalid: false,
        pwInvalid: true,
        pwplaceholder: "비밀번호를 5자 이상 입력하세요"
      });
    } else if (! (pwAgain == pw)) {
      await this.setState({
        inputpwagain: "",
        emailInvalid: false,
        pwInvalid: false,
        pwagainInvalid: true,
        pwagainplaceholder: "입력하신 비밀번호와 일치하지 않습니다."
      });
    }else{
      fetch(
        "http://localhost:8080/SignUp/" +
          name +
          "/" +
          phoneNum +
          "/" +
          email +
          "/" +
          pw
      )
        .then(response => {
          // return response.json();
        })
        .then(result => {
          // console.log(result);
        });
      // var data = event;
      // var xhr = new XMLHttpRequest();
      // xhr.addEventListener("readystatechange", function () {
      //     if (this.readyState === 4) {
      //         console.log(this.responseText);
      //     }
      // });
      // await xhr.open("POST", "http://localhost:8080/SignUp/"
      //               +this.state.inputname+"/"+this.state.inputphoneNum+"/"+
      //               this.state.inputemail+"/"+this.state.inputpw);
      // xhr.send(data)
      // // alert("question page is edited");
      // window.location.href = "http://localhost:3000/teacherComponents/ViewAllQandAs"

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
    }
    return;
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="nameForm">이름</Label>
            <Input
              value={this.state.inputname}
              onChange={event => this.nameOnChange(event.target.value)}
              id="nameForm"
              placeholder="사용자 이름을 입력하세요"
            />
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumForm">연락처</Label>
            <Input
              value={this.state.inputphonenum}
              onChange={event => this.phoneNumOnChange(event.target.value)}
              id="phoneNumForm"
              placeholder="010-0000-0000"
            />
          </FormGroup>
          <FormGroup>
            <Label for="emailForm">아주대학교 이메일</Label>
            <Input
              value={this.state.inputemail}
              onChange={event => this.emailOnChange(event.target.value)}
              type="email"
              name="email"
              id="emailForm"
              invalid={this.state.emailInvalid}
              placeholder={this.state.emailplaceholder}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pwForm">비밀번호</Label>
            <Input
              value={this.state.inputpw}
              onChange={event => this.pwOnChange(event.target.value)}
              type="password"
              id="pwForm"
              invalid={this.state.pwInvalid}
              placeholder={this.state.pwplaceholder}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pwAgainForm">비밀번호 재입력</Label>
            <Input
              value={this.state.inputpwagain}
              onChange={event => this.pwAgainOnChange(event.target.value)}
              type="password"
              id="pwAgainForm"
              invalid={this.state.pwagainInvalid}
              placeholder={this.state.pwagainplaceholder}
            />
          </FormGroup>
          <Button onClick={() => this.signupBtn()}>회원가입</Button>
        </Form>
      </div>
    );
  }
}
