import React from 'react';
import trainer1 from '/assets/trainer1.jpg';
import trainer2 from '/assets/trainer2.jpg';
import trainer3 from '/assets/trainer3.jpg';
import trainer4 from '/assets/trainer4.jpg';
import Trainer from './Trainer';

export default function Trainers() {
    const trainers = [
        {
            id: 1,
            name: 'BRUCE BAILEY',
            designation: 'CROSSFIT EXPERT',
            image: trainer1
        },
        {
            id: 2,
            name: 'BRUCE BAILEY',
            designation: 'CROSSFIT EXPERT',
            image: trainer2
        },
        {
            id: 3,
            name: 'BRUCE BAILEY',
            designation: 'CROSSFIT EXPERT',
            image: trainer3
        },
        {
            id: 4,
            name: 'BRUCE BAILEY',
            designation: 'CROSSFIT EXPERT',
            image: trainer4
        },
    ];
    return (
        <div id="trainers">
            <div className="wrapper flex">
                <h2>MEET OUR STRONGEST TEAM</h2>
                {/* <button className="btn-primary flex">
                    <div className="btn-content">READ MORE</div><div><i className="fa-solid fa-arrow-right"></i></div>
                </button> */}
            </div>
            <div className="trainer-container flex">
                {trainers.map(trainer => (<Trainer trainer={trainer} key={trainer.id} />))}
            </div>
        </div>
    );
}