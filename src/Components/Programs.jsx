import React from 'react';
import program1 from '/assets/program-1.jpg'
import program2 from '/assets/program-2.jpg'
import program3 from '/assets/program-3.jpg'
import program4 from '/assets/program-4.jpg'
import Program from './Program';

export default function Programs() {
    const programs = [
        {
            programName: 'CROSSFIT',
            heading: 'BODY SHAPE',
            desc: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas',
            backgroundColor: '#29282d',
            backgroundImage: program1,
            flexDirection: 'row-reverse'
        },
        {
            programName: 'BODY BALANCE',
            heading: 'RELAX PROGRAM',
            desc: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas ',
            backgroundColor: '#f34e3a',
            backgroundImage: program2,
            flexDirection: 'row-reverse'
        },
        {
            programName: 'BOX',
            heading: 'BODY SHAPE',
            desc: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas',
            backgroundColor: '#f34e3a',
            backgroundImage: program3,
            flexDirection: 'row'
        },
        {
            programName: 'CARDIO',
            heading: 'CARDIO WORKFLOW',
            desc: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas',
            backgroundColor: '#29282d',
            backgroundImage: program4,
            flexDirection: 'row'
        },
    ];
    return (
        <div className="training-container flex">
            {programs.map((program) => (<Program program={program} />))}
            {/* <div className="trainings flex">
                <img src={program1} alt="" />
                <div>
                    <span className="text-highlighter">BODY SHAPE</span>
                    <h4>CROSSFIT</h4>
                    <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas</p>
                    <a href="/">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="trainings flex">
                <img src={program2} alt="" />
                <div>
                    <span className="text-highlighter">BODY SHAPE</span>
                    <h4>CROSSFIT</h4>
                    <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas</p>
                    <a href="/">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="trainings flex">
                <img src={program3} alt="" />
                <div>
                    <span className="text-highlighter">BODY SHAPE</span>
                    <h4>CROSSFIT</h4>
                    <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas</p>
                    <a href="/">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="trainings flex">
                <img src={program4} alt="" />
                <div>
                    <span className="text-highlighter">BODY SHAPE</span>
                    <h4>CROSSFIT</h4>
                    <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus maecenas</p>
                    <a href="/">Read More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div> */}
        </div>
    );
}