import React from 'react';
import voidchampion from '../assets/images/GAT/voidjg.png';

export default function GATTimeline() {
    return (
        <section className="flex-timeline">
            <div className="flex-timeline-content">
                
                <div className="flex-timeline-component-big"> 
                <di className="flex-timeline-bridge">
                    <div className="flex-timeline-date">2022</div>

                    <div className="flex-timeline-description">
                        <p>Upcoming: Overwhelming new jungler that should fill a void in all your hearts</p>
                    </div>
                </di>

                <div className="flex-timeline-image">
                    <img src={voidchampion} alt="" />
                </div>
                </div>
            </div>
            
        </section>
    )
}
