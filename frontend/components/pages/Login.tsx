import React, { useContext, useEffect } from "react";
// import '../../css/pages/login.scss';
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
          localStorage.setItem('example-jwt-jwt', res.data.token);
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
            errorElem = <p>Login or password is incorrect.</p>
        }
        return (
            <main className="c-login">
                <div className="o-container">
                    <h1 className="o-main-title">
                        login
                    </h1>
                    {errorElem}
                    <form>
                        <label>
                            Username
                            <input type="text" name="username" placeholder="username" onKeyUp={this.onChange}/>
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" placeholder="password" onKeyUp={this.onChange}/>
                        </label>
                        <input type="submit" name="Login" onClick={e => this.handleLogin(e)}/>
                    </form>
                </div>
            </main>
        );
    }
}