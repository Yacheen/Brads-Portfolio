import React from 'react'

export default function Timeline() {
    return (
        <section className="timeline">
            
                <div className="timeline__component">
                    <div className="timeline__date timeline__date--right"> August 30, 2017</div>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <div className="timeline__component timeline__component--bg">
                    <h2 className="timeline__title">bla bla bla </h2>
                    <p className="timeline__paragraph">
                    bla bla, Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam quidem reprehenderit
                    est e
                    a commodi vero rerum quisquam placeat culpa
                    veritatis!
                    </p>
                </div>

                <div className="timeline__component timeline__component--bg">
                    <h2 className="timeline__title">bla bla bla </h2>
                    <p className="timeline__paragraph">
                    bla bla, Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam quidem reprehenderit
                    est e
                    a commodi vero rerum quisquam placeat culpa
                    veritatis!
                    </p>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <div className="timeline__component">
                    <div className="timeline__date timeline__date--left"> August 30, 2017</div>
                </div>

        </section>
    )
}
