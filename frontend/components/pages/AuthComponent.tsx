import React, { Component, createElement } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getJwt } from './../../helpers';

interface AuthComponentProps {
    history: any
}
interface AuthComponentState {
    user: string|undefined,
}

class AuthComponent extends Component<AuthComponentProps, AuthComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const jwt = getJwt();
    if (!jwt) {
      this.setState({
        user: null
      });
      return;
    }

    axios.get('http://localhost:8000/api/user', { headers: { Authorization: getJwt() } }).then(res => {
      this.setState({
        user: res.data.user
      })
    });
  }

  render() {
    const { user } = this.state;
    if (user === undefined) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if (user === null) {
      this.props.history.push('/login');
    }

    return this.props.children;
  }
}

export default withRouter(AuthComponent);