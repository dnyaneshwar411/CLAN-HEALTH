import React from 'react';
import Service from './Service';
import service1Img from '/assets/info-box-img-1.jpg';
import service2Img from '/assets/info-box-img-2.jpg';
import service3Img from '/assets/info-box-img-3.jpg';

export default function Services() {
    const services = [
        {
            id: 1,
            serviceName: 'GROUP FITNESS',
            serviceDescription: 'Improve your body strength. Join our group trainings /sessions and get in shape fast.',
            icon: 'fa-solid fa-phone',
            backgroundImage: service1Img
        },
        {
            id: 2,
            serviceName: 'PERSONAL TRAINER',
            serviceDescription: 'Stay motivated. Our personal trainers will help you find a perfect workout.',
            icon: 'fa-solid fa-phone',
            backgroundImage: service2Img
        },
        {
            id: 3,
            serviceName: 'CARDIO PROGRAM',
            serviceDescription: 'Get your best body ever. Our trainers will build your perfect cardio workout.',
            icon: 'fa-solid fa-phone',
            backgroundImage: service3Img
        }
    ]
    return (
        <div id='services' className='flex'>
            {services.map(service => <Service service={service} />)}
        </div>
    );
}