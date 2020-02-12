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
                    <h2 className="o-main-title c-home__title">
                        Homepage
                    </h2>
                    <h3>
                        Visit protected site: <br/>
                        <Link to="/protected">Protected</Link>
                    </h3>                          
                </div>
            </main>
        </AuthOverlord>
    );
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, null)(Home)