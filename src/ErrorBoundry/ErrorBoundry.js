import React, { Component } from "react";
class ErrorBoundry extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };
  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: info
    });
  };

  render() {
    if (this.state.hasError) {
      // return <h1>{this.state.errorMessage}</h1>;
      return <h1>Sorry</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
