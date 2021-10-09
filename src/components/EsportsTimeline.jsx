import React from 'react'
import wrtwitchrivals from '../assets/images/esports/wrtwitchrivals.png';
import HU from '../assets/images/esports/HU.png';
import direwolves from '../assets/images/esports/direwolves.png';
import DNA from '../assets/images/esports/DNA.png';
import TSM from '../assets/images/esports/tsm_logo.png';
import FNC from '../assets/images/esports/fnc_logo.webp';

export default function EsportsTimeline() {
    return (
        <section className="timeline">
             <div className="timeline-content">
                 <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                     <div className="timeline-date">2021</div>

                     <div className="timeline-middle"> 
                        <div className="timeline-point"></div>
                     </div>

                     <div className="timeline-resources">
                         <div className="timeline-description">
                             <p>Wilf Rift Twitch Rivals Winner</p>
                             <span className="span-big"></span>
                             
                        </div>
                         <div className="timeline-big">
                             <img src={wrtwitchrivals} alt="" />
                             
                        </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                     <div className="timeline-date">2019</div>
                     
                     <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                     <div className="timeline-description-small">
                             <p>Riot Internal All-Stars 1v1 Tournament</p>
                             <span className="span-small"></span>
                             
                    </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                    <div className="timeline-date-continued">2019</div>

                    <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                         <div className="timeline-description">
                            <p>Harrisburg University Varsity <span className="second-line"><br/>League of Legends team - Bot Lane</span></p>
                            <span className="span-big"></span>
                         </div>

                         <div className="timeline-big">
                             <img src={HU} alt="" />
                             
                        </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                    <div className="timeline-date">2018</div>

                    <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                         <div className="timeline-description">
                            <p>Dire Wolves Head Analyst Split 2 and Worlds</p>
                            <span className="span-big"></span>
                         </div>

                         <div className="timeline-big">
                             <img src={direwolves} alt="" />
                        </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                     <div className="timeline-date-continued">2018</div>
                     
                     <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                     <div className="timeline-description-small">
                             <p>Remembrance Head Coach</p>
                             <span className="span-small"></span>
                    </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                    <div className="timeline-date">2017</div>

                    <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                         <div className="timeline-description">
                            <p>Founder of DNA, Amateur Esports Organization -<br/> <span className="second-line">Coach, Bot, and Top Lane</span></p>
                            <span className="span-big"></span>
                         </div>

                         <div className="timeline-big">
                             <img src={DNA} alt="" />
                        </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                    <div className="timeline-date-continued">2017</div>

                    <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                         <div className="timeline-description">
                            <p>TSM Analyst NA LCS 2017 Spring 2016</p>
                            <span className="span-big"></span>
                         </div>

                         <div className="timeline-big">
                             <img src={TSM} alt="" />
                        </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                     <div className="timeline-date">2016</div>
                     
                     <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                     <div className="timeline-description-small">
                             <p>Various small pro analyst contracts</p>
                             <span className="span-small"></span>
                    </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                     <div className="timeline-date-continued">2016</div>
                     
                     <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                     <div className="timeline-description-small">
                             <p>Various amateur teams as a bot laner</p>
                             <span className="span-small"></span>
                    </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-600" data-aos-duration="1000">
                    <div className="timeline-date">2015</div>

                    <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                         <div className="timeline-description">
                            <p>Fnatic Analyst EU LCS 2015 Spring</p>
                            <span className="span-big"></span>
                         </div>

                         <div className="timeline-big">
                             <img src={FNC} alt="" />
                        </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-800" data-aos-duration="1000">
                     <div className="timeline-date-continued">2015</div>
                     
                     <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                     <div className="timeline-description-small">
                             <p>Hit Challenger for the first time smilers :)</p>
                             <span className="span-small"></span>
                    </div>
                    </div>
                </div>

                <div className="timeline-component" data-aos="zoom-in-right" data-aos-offset="-1000" data-aos-duration="1000">
                     <div className="timeline-date">2014</div>
                     
                     <div className="timeline-middle">
                        <div className="timeline-point"></div>
                    </div>

                     <div className="timeline-resources">
                     <div className="timeline-description-small">
                             <p>Various Challenger Series teams</p>
                             <span className="span-small"></span>
                    </div>
                    </div>
                </div>

             </div>
        </section>
    )
}
