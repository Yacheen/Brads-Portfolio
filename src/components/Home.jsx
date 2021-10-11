import React from 'react'
import zed from '../assets/images/zed.jpg';

export default function Home() {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <div className="hero-picture"> 
                    <img src={zed} alt="akshan" />
                </div>
                <div className="hero-text">
                    <p>
                    Welcome to my site! I'm Brad, more commonly known 
                as Blizz online. I'm a game designer on Riot Games' Teamfight Tactics.
                I previously used to be on the Game Analysis Team at Riot,
                working mainly on League of Legends and some on Wild Rift, 
                and before that I used to work in the League esports scene as a player, analyst, and more. <br/> <br/>
                If you want to learn about some of the work I've done in the past,
                click on the tabs at the top to see what I did in those areas.
                If you want to keep up with me, feel free to click on the links to my socials at the bottom and follow.
                If you want to contact me for anything work or business related,
                please use the contact button in the top right.
                    </p>
                
                      
                     
                </div>
            </div>
        </section>
    )
}
