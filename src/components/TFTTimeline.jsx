import React, {useEffect} from 'react';
export default function Timeline() {
    useEffect(() => {
        document.title = "Blizz | TFT"
      }, [])
    return (
        <section className="TFT" data-aos="zoom-in" data-aos-duration="800">
            <div className="TFT-content">
                <h1>Coming soon!</h1>
            </div>

        </section>

    )
}
