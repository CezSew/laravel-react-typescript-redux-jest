import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../../helpers';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import store from "../../store";

interface AuthGuardProps {
    history: any,
    setUser: Function,
    user: any,
    isUserLoggedIn: boolean|null
}

class AuthGuard extends Component<AuthGuardProps> {

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

      if(!res.data.user) {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    if(!this.props.isUserLoggedIn) {
      return <div className="o-container"><p>Loading ...</p></div>;
    } else {
      return this.props.children;
    }
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isUserLoggedIn: state.isUserLoggedIn
})

const mapDispatchToProps = dispatch => {
  return {
      setUser: (user) => dispatch({ type: 'SET_USER', payload: {user} }),
  }
}

export default compose<any>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AuthGuard);
