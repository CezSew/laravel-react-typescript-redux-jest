import React from "react";
import {Link} from 'react-router-dom';
import '../../css/pages/home.scss';
import {Button} from '../utils/Button';
import { connect } from 'react-redux';
import store from "../../store";

interface HomeProps {
    username: string,
    testNumber: number,
    addNumber: Function
   }

const Home: React.SFC <HomeProps> = ({username, testNumber, addNumber}) => {
    return (
        <main className="c-home">
            <div className="o-container">
                <h1 className="o-main-title c-home__title">
                    home
                </h1>
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
    testNumber: state.testNumber
})

const mapDispatchToProps = dispatch => {
    return {
        addNumber: (number) => dispatch({ type: 'ADD_NUMBER', payload: {number} }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)