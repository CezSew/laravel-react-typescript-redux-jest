import React from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import '../../css/parts/header.scss';
import AuthComponent from '../pages/AuthGuard';

interface HeaderProps {
    user: {
        name: string|undefined
    },
    isUserLoggedIn: boolean|null
}

const Header: React.FC <HeaderProps>= ({user, isUserLoggedIn}) => {
    return (
        <header className="c-header">
            <div className="o-container o-container--space-between">
                <h1><a href="/">Logo</a></h1>
                {isUserLoggedIn ? <p>Logged in as {user.name}</p> : <Link to="/login">login</Link>}
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    isUserLoggedIn: state.isUserLoggedIn
})

export default connect(mapStateToProps, null)(Header)