import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import { Box, Button, Heading, Input, Label } from "@theme-ui/components";

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  };

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(this.state);
  };

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`);
    }

    return (
      <Box>
        <Heading>Log in</Heading>
        <form
          method="post"
          onSubmit={(event) => {
            this.handleSubmit(event);
            navigate(`/app/profile`);
          }}
        >
          <Label>
            Username
            <Input type="text" name="username" onChange={this.handleUpdate} />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </Label>
          <Button variant="primary">Login</Button>
        </form>
      </Box>
    );
  }
}

export default Login;
