import React from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import '../../css/parts/header.scss';
import AuthComponent from '../pages/AuthGuard';
import {USER_LOGOUT} from '../../constants/action-types';
import {handleLogout} from '../../actions';

interface HeaderProps {
    user: {
        name: string|undefined
    },
    isUserLoggedIn: boolean|null,
    dispatchLogout: Function
}

const Header: React.FC <HeaderProps>= ({user, isUserLoggedIn, dispatchLogout}) => {
    return (
        <header className="c-header">
            <div className="o-container o-container--space-between">
                <h1><a href="/">Logo</a></h1>
                {isUserLoggedIn 
                    ? <React.Fragment>
                        <p>Logged in as {user.name}</p>
                        <button className="c-header__logout" onClick={() => dispatchLogout()}>logout</button>
                      </React.Fragment> 
                    : <Link to="/login">login</Link>}
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    isUserLoggedIn: state.isUserLoggedIn
})

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogout: () => dispatch(handleLogout()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header)