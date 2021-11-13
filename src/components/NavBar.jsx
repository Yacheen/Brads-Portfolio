import React, {useState} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import TFTTimeline from './TFTTimeline';
import GATTimeline from './GATTimeline';
import EsportsTimeline from './EsportsTimeline';
import Contact from './Contact';
import Thankyou from './Thankyou';
//buttons
import akshanhome from '../assets/images/navbarButtons/akshanhome.png';
import akshanhome2 from '../assets/images/navbarButtons/akshanhome2.png';
import RellGAT from '../assets/images/navbarButtons/RellGAT.png';
import RellGAT2 from '../assets/images/navbarButtons/RellGAT2.png';
import SamiraEsports from '../assets/images/navbarButtons/SamiraEsports.png';
import SamiraEsports2 from '../assets/images/navbarButtons/SamiraEsports2.png';
import SennaContact from '../assets/images/navbarButtons/SennaContact.png';
import SennaContact2 from '../assets/images/navbarButtons/SennaContact2.png';
import ViegoTFT from '../assets/images/navbarButtons/ViegoTFT.png';
import ViegoTFT2 from '../assets/images/navbarButtons/ViegoTFT2.png';

export default function NavBar() {
    const [currentTab, setCurrentTab] = useState(0);
    //on css,
    return (
        <Router>
            <section className="nav-bar" data-aos="zoom-in" data-aos-duration="1000">
                <div className="nav-bar-content">
                    <Link to="/"><div className="nav-bar-name" onClick={() => setCurrentTab(0)}>Brad "Blizz" Dallaire</div></Link>
                        
                    <ul className="nav-bar-links">
                        <div className="home-button"><Link to="/"><li className={`button-settings nav-link home-link ${currentTab === 0 ? "home-toggled" : "none"} `} onClick={() => setCurrentTab(0)}></li></Link></div>
                        <Link to="/TFT"><li className={`button-settings nav-link tft-link ${currentTab === 1 ? "tft-toggled" : "none"}`} onClick={() => setCurrentTab(1)}></li></Link>
                        <Link to="/GAT"><li className={`button-settings nav-link gat-link ${currentTab === 2 ? "gat-toggled" : "none"}`} onClick={() => setCurrentTab(2)}></li></Link>
                        <Link to="/Esports"><li className={`button-settings nav-link esports-link ${currentTab === 3 ? "esports-toggled" : "none"}`} onClick={() => setCurrentTab(3)}></li></Link>
                        <Link to="/Contact"><li className={`button-settings nav-link contact-link ${currentTab === 4 ? "contact-toggled" : "none"}`} onClick={() => setCurrentTab(4)}></li></Link>
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
