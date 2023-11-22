import React from 'react';

export default function Service({ service }) {
    return (
        <div className='service flex' style={{ backgroundImage: `url(${service.backgroundImage})` }}>
            <img src={service.icon} alt="" />
            <h3>{service.serviceName}</h3>
            <p>{service.serviceDescription}</p>
            {/* <a href="#">READ MORE <i className="fa-solid fa-arrow-right"></i></a> */}
        </div>
    );
}