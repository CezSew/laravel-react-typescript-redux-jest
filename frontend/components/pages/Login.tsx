import React, { useContext, useEffect } from "react";
// import '../../css/pages/login.scss';
import {login} from '../../service/login';
import axios from 'axios';

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
            username: 'test12322@test.pl',
            password: 'admin1',
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
          localStorage.setItem('example-jwt-jwt', res.data.token);
          this.props.history.push('/protected')
        }).catch(() => {
            console.log('Error!');
            this.setState({
                error: true
            });
        });
    }

    onChange(e) {
        // this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <main className="c-login">
                <div className="o-container">
                    <h1 className="o-main-title">
                        login
                    </h1>
                    
                    <input type="text" name="username" placeholder="username" onChange={this.onChange}/>
                    <input type="password" name="password" placeholder="password" onChange={this.onChange}/>
                    <input type="submit" name="Login" onClick={e => this.handleLogin(e)}/>
                </div>
            </main>
        );
    }
}