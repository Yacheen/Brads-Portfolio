import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import TFTTimeline from './TFTTimeline';
import GATTimeline from './GATTimeline';
import EsportsTimeline from './EsportsTimeline';
import Contact from './Contact';
import Thankyou from './Thankyou';


export default function NavBar() {
    const [currentTab, setCurrentTab] = useState(0);
    

    return (
        <Router>
            <section className="nav-bar" data-aos="zoom-in" data-aos-duration="1000">
                <div className="nav-bar-content">
                    <Link to="/"><div className="nav-bar-name" onClick={() => setCurrentTab(0)}>Brad "Blizz" Dallaire</div></Link>
                        
                    <ul className="nav-bar-links">
                        <div className="home-button"><Link to="/"><li className={currentTab === 0 ? "toggled-button nav-link" : "none nav-link"} onClick={() => setCurrentTab(0)}>Home</li></Link></div>
                        <Link to="/TFT"><li className={currentTab === 1 ? "toggled-button nav-link" : "none nav-link"} onClick={() => setCurrentTab(1)}>TFT</li></Link>
                        <Link to="/GAT"><li className={currentTab === 2 ? "toggled-button nav-link" : "none nav-link"} onClick={() => setCurrentTab(2)}>GAT</li></Link>
                        <Link to="/Esports"><li className={currentTab === 3 ? "toggled-button nav-link" : "none nav-link"} onClick={() => setCurrentTab(3)}>Esports</li></Link>
                        <Link to="/Contact"><li className={currentTab === 4 ? "toggled-button nav-link" : "none nav-link"} onClick={() => setCurrentTab(4)}>Contact</li></Link>
                    </ul>
                </div>
            </section>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/TFT" component={TFTTimeline} />
                <Route exact path="/GAT" component={GATTimeline} />
                <Route exact path="/Esports" component={EsportsTimeline} />
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/Thankyou" component={Thankyou}/>
                
            </Switch>
        </Router>
        
    )
}
