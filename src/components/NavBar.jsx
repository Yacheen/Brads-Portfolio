import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Timeline from './Timeline';

export default function NavBar() {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <Router>
            <section className="nav-bar">
                <div className="nav-bar-content">
                    <Link to="/"><div className="nav-bar-name" onClick={() => setCurrentTab(0)}>first lastname</div></Link>
                        
                    <ul className="nav-bar-links">
                        <Link to="/"><li  className={currentTab === 0 ? "toggled-button" : "none"} onClick={() => setCurrentTab(0)}>Home</li></Link>
                        <Link to="/page2"><li className={currentTab === 1 ? "toggled-button" : "none"}  onClick={() => setCurrentTab(1)}>place</li></Link>
                        <Link to="/page3"><li className={currentTab === 2 ? "toggled-button" : "none"}  onClick={() => setCurrentTab(2)}>placehol</li></Link>
                        <Link to="/page4"><li className={currentTab === 3 ? "toggled-button" : "none"}  onClick={() => setCurrentTab(3)}>placeh</li></Link>
                        <Link to="/page5"><li className={currentTab === 4 ? "toggled-button" : "none"}  onClick={() => setCurrentTab(4)}>Contact</li></Link>
                    </ul>
                </div>
            </section>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/page2" component={Timeline} />
                <Route exact />
                <Route exact />
                <Route exact />
            </Switch>
        </Router>
        
    )
}
