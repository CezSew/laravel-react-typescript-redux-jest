import React, { useContext, useEffect } from "react";
import '../../css/pages/login.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from '../parts/Header';

interface LoginProps {
    history: any
}
interface LoginState {
    username: string,
    password: string,
    error: boolean
}

export default class Login extends React.Component<LoginProps, LoginState> {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            email: this.state.username,
            password: this.state.password
        }).then(res => {
          localStorage.setItem('jwt', res.data.token);
          this.props.history.push('/')
        }).catch(() => {
            this.setState({
                error: true
            });
        });
    }

    onChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const result = {};
        result[fieldName] = fieldValue;
        this.setState({...result});
    }

    render() {
        let errorElem = <React.Fragment></React.Fragment>;
        if(this.state.error) {
            errorElem = <p className="o-error-container__text">Login or password is incorrect.</p>
        }
        return (
            <React.Fragment>
                <Header/>
                <main className="c-login">
                    <div className="o-container">
                        <h1 className="o-main-title">
                            Login page
                        </h1>
                        <section className="c-login__form-container">
                            <form className="c-login-form">
                                <label className="c-login-form__label">
                                    Username
                                    <input className="c-login-form__input" type="text" name="username" placeholder="username" onKeyUp={this.onChange}/>
                                </label>
                                <label className="c-login-form__label">
                                    Password
                                    <input className="c-login-form__input" type="password" name="password" placeholder="password" onKeyUp={this.onChange}/>
                                </label>
                                <div className="o-error-container">
                                    {errorElem}
                                </div>
                                <input className="c-login-form__input c-login-form__input--submit" type="submit" name="Login" onClick={e => this.handleLogin(e)}/>
                            </form>
                        </section>
                        <h2><Link to="/">Go back to homepage</Link></h2>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}