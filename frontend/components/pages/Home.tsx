import React from "react";
import {Link} from 'react-router-dom';
import '../../css/pages/home.scss';
import Header from '../parts/Header';
import { connect } from 'react-redux';
import AuthOverlord from '../auth/AuthOverlord';

interface HomeProps {
    user: {
        name: string|undefined
    }
}

const Home: React.SFC <HomeProps> = ({user}) => {
    return (
        <AuthOverlord>
            <Header/>
            <main className="c-home">
                <div className="o-container">
                    <section className="c-app__title-container">
                        <h1 className="o-h1 c-app__main-title">Laravel + react + redux + typescript + sass</h1>
                        <h2 className="c-app__sub-title">is awesome</h2>
                        <a href="https://github.com/CezSew" className="c-app__title-author">with love by cezsew @2020</a>
                    </section>
                    <p className="o-main-title c-home__title">
                        Homepage
                    </p>
                    <p>
                        Visit protected site: <br/>
                        <Link to="/protected">Protected</Link>
                    </p>                          
                </div>
            </main>
        </AuthOverlord>
    );
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, null)(Home)