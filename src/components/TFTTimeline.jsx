import React, { useEffect } from "react";
import edge_of_night from "../assets/images/TFT/edge_of_night.webp";
import snipersnest from "../assets/images/TFT/snipersnest.gif";
export default function Timeline() {
    useEffect(() => {
        document.title = "Blizz | TFT";
    }, []);
    return (
        <section className="flex-timeline">
            <div className="flex-timeline-content">
                <div className="pillar-line"></div>
                <div className="flex-timeline-date">12.2</div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="150"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Edge of Night</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={edge_of_night} alt="" />
                    </div>
                </div>

                <div
                    className="flex-timeline-component-big"
                    data-aos="zoom-in-right"
                    data-aos-offset="150"
                    data-aos-duration="1000"
                >
                    <div className="flex-timeline-description">
                        <p>Sniper's Nest Indicators</p>
                    </div>

                    <div className="flex-timeline-image">
                        <img src={snipersnest} alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
}
