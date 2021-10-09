import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import TFTTimeline from './TFTTimeline';
import GATTimeline from './GATTimeline';
import EsportsTimeline from './EsportsTimeline';


export default function NavBar() {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <Router>
            <section className="nav-bar">
                <div className="nav-bar-content">
                    <Link to="/"><div className="nav-bar-name" onClick={() => setCurrentTab(0)}>first lastname</div></Link>
                        
                    <ul className="nav-bar-links">
                        <Link to="/"><li  className={currentTab === 0 ? "toggled-button" : "none"} onClick={() => setCurrentTab(0)}>Home</li></Link>
                        <Link to="/TFT"><li className={currentTab === 1 ? "toggled-button" : "none"}  onClick={() => setCurrentTab(1)}>TFT</li></Link>
                        <Link to="/GAT"><li className={currentTab === 2 ? "toggled-button" : "none"}  onClick={() => setCurrentTab(2)}>GAT</li></Link>
                        <Link to="/Esports"><li className={currentTab === 3 ? "toggled-button" : "none"}  onClick={() => setCurrentTab(3)}>Esports</li></Link>
                        <li>Contact</li>
                    </ul>
                </div>
            </section>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/TFT" component={TFTTimeline} />
                <Route exact path="/GAT" component={GATTimeline} />
                <Route exact path="/Esports" component={EsportsTimeline} />
                
            </Switch>
        </Router>
        
    )
}
