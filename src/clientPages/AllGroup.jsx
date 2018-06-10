import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Collapse,
  Card,
  NavDropdown,
  Nav,
  Jumbotron
} from "reactstrap";

export default class AllGroup extends Component {
  constructor() {
    super();
    this.state = {
      groupList: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/getAllGroups")
      .then(response => {
        return response.json();
      })
      .then(result => {
        var arr = [];
        for (let i = 0; i < result.length; i++) {
          arr.push(result[i].name);
        }
        this.setState({
          groupList: arr
        });
      });
  }

  clickedGroup(groupKey) {
    console.log(groupKey);
  }

  setGroups() {
    let groups = this.state.groupList.map(function(group, index) {
      return (
        <ListGroupItem key={index}>
          <Button
            color="link"
            href={"/view/"+group}
          >
            {group}
          </Button>
        </ListGroupItem>
      );
    });
    return <ListGroup>{groups}</ListGroup>;
  }

  render() {
    // const GroupList = (
    //     <div>
    //     <ListGroup>
    //       forEach(group in groupList){
    //         <ListGroupItem>group</ListGroupItem>
    //       }
    //       <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    //       <ListGroupItem>Morbi leo risus</ListGroupItem>
    //       <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    //       <ListGroupItem>Vestibulum at eros</ListGroupItem>
    //     </ListGroup>
    //     </div>
    // );
    return (
      <div>
        <Jumbotron>
          <h3 className="display-3">AJOU CLUBS</h3>
          <p className="lead">
            <br />모든 동아리를 둘러볼 수 있습니다.
            <br />동아리 멤버가 되어 다른 동아리원들과 소통해보세요.
            <br />아래의 동아리명 버튼을 눌러서 원하는 그룹을 둘러보세요.
          </p>
          <hr className="my-2" />
          <p>
            <br />아직 회원이 아니신가요?
          </p>
          <p className="lead">
            <Link to="/login">
              <Button color="link">로그인</Button>
            </Link>
            <Link to="/signup">
              <Button color="link">회원가입</Button>
            </Link>
          </p>
        </Jumbotron>
        {this.setGroups()}
      </div>
    );
  }
}
