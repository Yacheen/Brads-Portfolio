import React from 'react'

export default function Contact() {
    return (
        <section className="contact">
            <div className="contact-content" data-aos="fade-up" data-aos-duration="600">
            <h1>Contact Me</h1>
                <form className="contact-form" action="https://formsubmit.co/blizzlolwebsite@gmail.com" method="POST">
                    <input className="name-input" type="text" name="name" placeholder="Name" required />
                    <input type="hidden" name="_subject" value="Email from Portfolio" />
                    <input type="hidden" name="_next" value="http://localhost:3000/Thankyou"/>
                    <input className="email-input" type="email" name="email" placeholder="Email" required />
                    <textarea className="message-input" type="text" name="message" placeholder="Message"  required />
                    
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
        </section>
    )
}
