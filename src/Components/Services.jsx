import React from 'react';
import Service from './Service';
import service1Img from '/assets/info-box-img-1.jpg';
import service2Img from '/assets/info-box-img-2.jpg';
import service3Img from '/assets/info-box-img-3.jpg';
import icon1 from '/assets/icons/people.png';
import icon2 from '/assets/icons/dumbell.png';
import icon3 from '/assets/icons/cardio.png';

export default function Services() {
    const services = [
        {
            id: 1,
            serviceName: 'GROUP FITNESS',
            serviceDescription: 'Improve your body strength. Join our group trainings /sessions and get in shape fast.',
            backgroundImage: service1Img,
            icon: icon1
        },
        {
            id: 2,
            serviceName: 'PERSONAL TRAINER',
            serviceDescription: 'Stay motivated. Our personal trainers will help you find a perfect workout.',
            backgroundImage: service2Img,
            icon: icon2
        },
        {
            id: 3,
            serviceName: 'CARDIO PROGRAM',
            serviceDescription: 'Get your best body ever. Our trainers will build your perfect cardio workout.',
            backgroundImage: service3Img,
            icon: icon3
        }
    ]
    return (
        <div id='services' className='flex'>
            {services.map(service => <Service service={service} key={service.id} />)}
        </div>
    );
}