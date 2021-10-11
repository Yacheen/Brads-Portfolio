import React from 'react'
import wrtwitchrivals from '../assets/images/esports/wrtwitchrivals.png';
import HU from '../assets/images/esports/HU.png';
import direwolves from '../assets/images/esports/direwolves.png';
import DNA from '../assets/images/esports/DNA.png';
import TSM from '../assets/images/esports/TSM.png';
import FNC from '../assets/images/esports/FNC.png';

export default function EsportsTimeline() {

    return (
        <section className="flex-timeline">
            <div className="flex-timeline-content">
                <div className="pillar-line"></div>

                <div className="flex-timeline-date">
                    2021
                </div>

                <div className="flex-timeline-component-big" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000"> 
                        <div className="flex-timeline-description">
                            <p>Wild Rift Twich Rivals Winner</p>
                        </div>
                    

                    <div className="flex-timeline-image">
                        <img src={wrtwitchrivals} alt="" />
                    </div>
                </div>

                <div className="flex-timeline-date">
                    2019
                </div>

                <div className="flex-timeline-component-small" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000">
                    <div className="flex-timeline-description">
                        <p>Riot Internal All-Stars 1v1 Tournament</p>
                    </div>
                </div>

                <div className="flex-timeline-component-big" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000"> 
                        <div className="flex-timeline-description">
                            <p className="double-line">Harrisburg University Varsity League of Legends team - Bot Lane</p>
                        </div>
                    

                    <div className="flex-timeline-image">
                        <img src={HU} alt="" />
                    </div>
                </div>

                <div className="flex-timeline-date">
                    2018
                </div>

                <div className="flex-timeline-component-big" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000"> 
                        <div className="flex-timeline-description">
                            <p>Dire Wolves Head Analyst Split 2 and Worlds</p>
                        </div>
                    

                    <div className="flex-timeline-image">
                        <img src={direwolves} alt="" />
                    </div>
                </div>

                <div className="flex-timeline-component-small" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000">
                    <div className="flex-timeline-description">
                        <p>Remembrance Head Coach</p>
                    </div>
                </div>

                <div className="flex-timeline-date">
                    2017
                </div>

                <div className="flex-timeline-component-big" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000"> 
                        <div className="flex-timeline-description">
                            <p className="double-line">Founder of DNA, Amateur Esports Organization - Coach, Bot, and Top Lane</p>
                        </div>
                    

                    <div className="flex-timeline-image">
                        <img src={DNA} alt="" />
                    </div>
                </div>

                <div className="flex-timeline-component-big" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000"> 
                        <div className="flex-timeline-description">
                            <p>TSM Analyst NA LCS 2017 Spring</p>
                        </div>
                    

                    <div className="flex-timeline-image">
                        <img src={TSM} alt="" />
                    </div>
                </div>

                <div className="flex-timeline-date">
                    2016
                </div>

                <div className="flex-timeline-component-small" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000">
                    <div className="flex-timeline-description">
                        <p>Various small pro analyst contracts</p>
                    </div>
                </div>

                <div className="flex-timeline-component-small" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000">
                    <div className="flex-timeline-description">
                        <p>Various amateur teams as a bot laner</p>
                    </div>
                </div>

                <div className="flex-timeline-date">
                    2015
                </div>

                <div className="flex-timeline-component-big" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000"> 
                        <div className="flex-timeline-description">
                            <p>Fnatic Analyst EU LCS 2015 Spring</p>
                        </div>
                    

                    <div className="flex-timeline-image">
                        <img src={FNC} alt="" />
                    </div>
                </div>

                <div className="flex-timeline-component-small" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000">
                    <div className="flex-timeline-description">
                        <p>Hit Challenger for the first time smilers</p>
                    </div>
                </div>

                <div className="flex-timeline-date">
                    2014
                </div>

                <div className="flex-timeline-component-small" data-aos="zoom-in-right" data-aos-offset="150" data-aos-duration="1000">
                    <div className="flex-timeline-description">
                        <p>Various Challenger Series teams</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
