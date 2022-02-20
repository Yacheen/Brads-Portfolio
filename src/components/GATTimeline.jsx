import React, { useEffect } from "react";
import voidchampion from "../assets/images/GAT/voidjg.webp";
//import electricmarksman from "../assets/images/GAT/upcomingmarksman.webp";
//import upcomingnewitems from "../assets/images/GAT/honeyfruit.webp";
import newmarksmanitems from "../assets/images/GAT/wildriftmarksmanitems.webp";
import akshan from "../assets/images/GAT/akshan.webp";
import viego from "../assets/images/GAT/viego.webp";
import rell from "../assets/images/GAT/rell.webp";
import marksmanitemupdate from "../assets/images/GAT/marksmanitemupdate.webp";
import samira from "../assets/images/GAT/samira.webp";
import proplaymatrix from "../assets/images/GAT/proplaymatrix.webp";
import wildriftdesignriskmatrix from "../assets/images/GAT/wildriftdesignriskmatrix.webp";
import wildriftbalance from "../assets/images/GAT/wildriftbalance.webp";
import senna from "../assets/images/GAT/senna.webp";
import allstars from "../assets/images/GAT/allstars.webp";
import omnistone from "../assets/images/GAT/omnistone.webp";
import preseasondragons from "../assets/images/GAT/preseasondragons.webp";
import seedjar from "../assets/images/GAT/Seedjar.webp";
import zeri from "../assets/images/GAT/Zeri.webp";
import firststrike from "../assets/images/GAT/firststrike.webp";
import lethaltempo from "../assets/images/GAT/lethaltempo.webp";

export default function GATTimeline() {
    useEffect(() => {
        document.title = "Blizz | GAT";
    }, []);

    return (
        <section className="flex-timeline">
            <div className="flex-timeline-content">
                <div className="pillar-line"></div>
                <div className="flex-timeline-date">2022</div>
                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="double-line">
                            Upcoming: Overwhelming new jungler that
                            <br />
                            should fill a void in all your hearts
                        </p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={voidchampion} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Zeri</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={zeri} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Wild Rift: Hextech Megadrive and Ixtali Seedjar</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={seedjar} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="double-line">Wild Rift: Kayle, Morgana, Dr. Mundo, Jayce, Veigar, Caitlyn, Karma, Sett, Shen, Yuumi</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Upcoming Rengar changes</p>
                    </div>
                </div>

                <div className="flex-timeline-date">2021</div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>
                            Preseason 2022 Lethal Tempo
                        </p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={lethaltempo} alt="" />
                        
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>
                            Preseason 2022 First Strike
                        </p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={firststrike} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="double-line">
                            Preseason 2022 Hextech/Chemtech
                            <br />
                            Dragon Combat Quirks
                        </p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={preseasondragons} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="break-line">
                            Preseason 2022 Hextech/Chemtech
                            <br />
                            Map State Terrain
                        </p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Worlds Jungle Assassins buffs</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Smite Burst Healing nerf</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Wild Rift: Akshan, Brand, Nunu, Thresh</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Wild Rift: New Marksmen items</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={newmarksmanitems} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Wild Rift: Xin Zhao and Wukong parity with PC</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="double-line">
                            Wild Rift: Phase Rush, Font of Life, and minor rune update
                        </p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Wild Rift: Lucian, Senna</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Wild Rift: Fighter Item Update</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Wild Rift: Kha’zix, Rammus, Rengar, Renekton</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Akshan</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={akshan} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Viego</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={viego} alt="" />
                    </div>
                </div>

                <div className="flex-timeline-date">2020</div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Rell</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={rell} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>AP Twitch</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Preseason 2021 Marksmen Item Update</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={marksmanitemupdate} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Samira</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={samira} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="break-line">
                            Pro Play Matrix
                            <br />
                            (predicts pro play picks based off data)
                        </p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={proplaymatrix} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Summoner Spell work (Ghost extension)</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Marksmen class buffs</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="break-line">
                            Funnel investigation and nerf
                            <br />
                            (Monster Hunter debuff changes)
                        </p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Soraka top nerfs/changes</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="break-line">
                            Wild Rift: Design Risk Matrix
                            <br />
                            (calculates risk for mobile design)
                        </p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={wildriftdesignriskmatrix} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="break-line">
                            Wild Rift: General Balance changes
                            <br />
                            (now to end of GAT work)
                        </p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={wildriftbalance} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p className="break-line">
                            Senna AD vs Support balance levers
                            <br />
                            (soul drop rate)
                        </p>
                    </div>
                </div>

                <div className="flex-timeline-date">2019</div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Senna</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={senna} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>All-Stars 1v1 Game Mode</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={allstars} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="75"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Prototype: Omnistone</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={omnistone} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-offset="75"
                >
                    <div className="flex-timeline-description">
                        <p>Rift Herald respawn changes</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-offset="75"
                >
                    <div className="flex-timeline-description">
                        <p>Aftershock and Conqueror Changes</p>
                    </div>
                </div>

                <div
                    className="flex-timeline-component-small"
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-offset="75"
                >
                    <div className="flex-timeline-description">
                        <p>Akali targeted R1 change</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
