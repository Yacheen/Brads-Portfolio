import React, { useEffect } from "react";
import bradnothd from "../assets/images/bradnothd.webp";

export default function Home() {
    useEffect(() => {
        document.title = "Blizz | Home";
    }, []);

    return (
        <section className="hero-container" data-aos="zoom-in" data-aos-duration="800">
            <div className="hero-content">
                <div className="hero-picture">
                    <img src={bradnothd} alt="akshan" />
                </div>
                <div className="hero-text">
                    <p>
                        <span>Welcome to my site! I'm Brad, more commonly known as Blizz online.</span>
                        <br /> <br /> I'm a game designer at Riot Games, currently working on Teamfight
                        Tactics. I previously used to be on the Game Analysis Team, working mainly on League
                        of Legends and some on Wild Rift, and before that I used to work in the League esports
                        scene as a player, analyst, and more. <br /> <br />
                        If you want to learn about some of the work I've done in the past, click on the tabs
                        at the top to see what I did in those areas. If you want to keep up with me, feel free
                        to click on the links to my socials at the bottom and follow. If you want to contact
                        me for anything work or business related, please use the contact button in the top
                        right.
                    </p>
                </div>
            </div>
        </section>
    );
}
