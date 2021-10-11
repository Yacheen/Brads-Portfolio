import React from 'react'
export default function Footer() {
    return (
        <footer className="footer-container" data-aos="zoom-in" data-aos-duration="1000">
            <div className="footer-content">
                <a href="https://www.twitch.tv/blizz_lol" target="_blank" rel="noreferrer">
                    <div className="footer-link">
                        <i class="fab fa-twitch"></i>
                        <p>Twitch</p>
                    </div>
                </a>
                <a href="https://twitter.com/blizz_lol" target="_blank" rel="noreferrer">
                    <div className="footer-link">
                        <i class="fab fa-twitter"></i>
                        <p>Twitter</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/brad-dallaire-881a58155?trk=public_profile_browsemap" target="_blank" rel="noreferrer">
                    <div className="footer-link">
                        <i class="fab fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </div>
                </a>
            </div>
        </footer>
    )
}
