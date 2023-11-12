import React from 'react';


export default function Program({ program }) {
    return (
        <div className="trainings flex" style={{ flexDirection: program.flexDirection }}>
            <img src={program.backgroundImage} alt="" />
            <div style={{ backgroundColor: program.backgroundColor }}>
                <span className={program.backgroundColor === '#f34e3a' ? null : 'text-highlighter'}>{program.heading}</span>
                <h4>{program.programName}</h4>
                <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas</p>
                <a href="/">Read More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    );
}