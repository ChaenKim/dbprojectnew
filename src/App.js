import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AllGroup from "./clientPages/AllGroup";
import Login from "./clientPages/Login";
import SignUp from "./clientPages/SignUp";
import ViewPosts from "./clientPages/ViewPosts";
import ClubBoard from "./clientPages/ClubBoard";
import ClubPhotos from "./clientPages/ClubPhotos";
import ClubBoardWrite from "./clientPages/ClubBoardWrite";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Col md={5} mdOffset={5}>
              <h1 className="App-title">React Web App</h1>
            </Col>
            <Col md={2} mdOffset={3} />
          </header>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">AJOU CLUBS</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={AllGroup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/view/:groupname" component={ViewPosts} />
            <Route exact path="/view/:groupname/board" component={ClubBoard} />
            <Route exact path="/view/:groupname/writeOnBoard" component={ClubBoardWrite} />
            <Route
              exact
              path="/view/:groupname/:photos"
              component={ClubPhotos}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
