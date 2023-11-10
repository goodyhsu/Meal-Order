import React from "react";
import CustomerNavBar from '../CustomerNavBar';
import logo from '../../logo.svg';

export const Home = () => {
    return (
        <div className="App">
            <CustomerNavBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                    {/* { result.msg } */}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>

    );
};