import React, { useContext, useEffect } from "react";
// import '../../css/pages/login.scss';
import {LoginService} from '../../service/LoginService';

export class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        LoginService('login', this.state).then((result) => {
            console.log(result)
        });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <main className="c-login">
                <div className="o-container">
                    <h1 className="o-main-title">
                        login
                    </h1>
                    <p>Pow!</p>
                    <input type="text" name="username" placeholder="username" onChange={this.onChange}/>
                    <input type="password" name="password" placeholder="password" onChange={this.onChange}/>
                    <input type="submit" name="Login" onClick={this.login}/>
                </div>
            </main>
        );
    }
}