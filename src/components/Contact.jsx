import React, {useEffect} from 'react'
import dotenv from 'dotenv'

dotenv.config();
export default function Contact() {
    useEffect(() => {
        document.title = "Blizz | Contact"
      }, [])
    return (
        <section className="contact">
            <div className="contact-content" data-aos="fade-up" data-aos-duration="600">
            <h1>Contact Me</h1>
                <form className="contact-form" action={`https://formsubmit.co/${process.env.REACT_APP_EMAIL}`} method="POST">
                    <input className="name-input" type="text" name="name" placeholder="Name" required />
                    <input type="hidden" name="_subject" value="Email from Portfolio" />
                    <input type="hidden" name="_next" value="https://blizz.lol/Thankyou"/>
                    <input className="email-input" type="email" name="email" placeholder="Email" required />
                    <textarea className="message-input" type="text" name="message" placeholder="Message"  required />
                    
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
        </section>
    )
}
