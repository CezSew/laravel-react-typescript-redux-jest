import React from "react";
import {Link} from 'react-router-dom';
import '../../css/pages/home.scss';
import {Button} from '../utils/Button';
import { connect } from 'react-redux';

interface HomeProps {
    username: string,
    testNumber: number,
    user: {
        name: string|undefined
    },
    addNumber: Function
}

const Home: React.SFC <HomeProps> = ({user, username, testNumber, addNumber}) => {
    return (
        <main className="c-home">
            <div className="o-container">
                <h1 className="o-main-title c-home__title">
                    home
                </h1>
                {user 
                ? <p> Logged in as {user.name}</p>
                : <p>User not logged in</p>}
                <p>testing redux:</p>
                <p>Hello, {username}: number {testNumber}</p>
                <Link to="/login">/login</Link>
                <br/>
                <br/>
                <br/>
                <Button handleClick={() => addNumber(Math.floor(Math.random() * 100))} buttonText={'bigger number!'} classList={'custom custom--pro'}/>
            </div>
        </main>
    );
}

const mapStateToProps = state => ({
    username: state.username,
    testNumber: state.testNumber,
    user: state.user
})

const mapDispatchToProps = dispatch => {
    return {
        addNumber: (number) => dispatch({ type: 'ADD_NUMBER', payload: {number} }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)