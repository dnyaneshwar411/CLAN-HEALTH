import React, { useState } from 'react';

export default function Trainer({ trainer }) {
    const [visible, setVisible] = useState(false);
    const isInViewport = function (element) {
        var rect = element.getBoundingClientRect();
        var html = document.documentElement;
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || html.clientHeight) &&
            rect.right <= (window.innerWidth || html.clientWidth)
        );
    }
    return (
        <div className='trainer'>
            <img src={trainer.image} alt="" />
            <div className="trainer-content">
                <h6>{trainer.name}</h6>
                <span>{trainer.designation}</span>
                <div className="socials">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className="trainer-tag">{trainer.designation}</div>
        </div>
    );
}