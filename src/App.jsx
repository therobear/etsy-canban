import React, { Fragment } from 'react';
import { Home } from './components/pages';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideNav } from './components/navigation';
import history from './utils/history';

const App = () => {
    return (
        <div className="main-div">
            <Router history={history}>
                
                    <Fragment>
                        <SideNav />
                        <div id="container" className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            </Routes>
                        </div>
                    </Fragment>
            </Router>
        </div>
    );
}

export default App;