import React, { Component, createElement } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getJwt } from './../../helpers';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import store from "../../store";

interface AuthComponentProps {
    history: any,
    setUser: Function,
    user: any
}

class AuthComponent extends Component<AuthComponentProps> {

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.setUser(null);
      return;
    }

    axios.get('http://localhost:8000/api/user', { headers: { Authorization: getJwt() } }).then(res => {
      this.props.setUser(res.data.user);
    });
  }

  render() {
    const {
      user,
    } = this.props;

    if (user === undefined) {
      return (
        <div>
          <p>You need to be logged in!</p>
          <p>Please <Link to="/login">Login</Link> or  <Link to="/">go back to homepage</Link></p>
        </div>
      );
    }

    if (user === null) {
      this.props.history.push('/login');
    }

    return this.props.children;
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
      setUser: (user) => dispatch({ type: 'SET_USER', payload: {user} }),
  }
}

export default compose<any>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AuthComponent);
