import React, {useState} from 'react'

export default function NavBar() {
    const [currentButton, setCurrentButton] = useState();
    return (
        <section className="nav-bar">
            <div className="nav-bar-content">
                <div className="nav-bar-name">first lastname</div>
                    
                <ul>
                    <li>Home</li>
                    <li>word</li>
                    <li>something</li>
                    <li>something</li>
                    <li>contact</li>
                </ul>
            </div>
        </section>
    )
}
