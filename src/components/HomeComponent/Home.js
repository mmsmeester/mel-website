import React from 'react';
import './Home.css';
import TopNav from './TopNav.js';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <TopNav></TopNav>
            </div>
        );
    }
}

export default Home;