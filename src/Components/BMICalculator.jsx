import React, { useRef, useState } from 'react';

export default function BMICalculator() {
    const [result, setResult] = useState(false);
    const [bmi, setBMI] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const calcBMI = function () {
        if (!weight || !height || !age) {
        }
        else {
            setBMI(Math.round(weight / (height * height)));
            setResult(true);
        }

    }
    return (
        <div>
            <input value={height} onChange={e => setHeight(e.target.value)} type="number" placeholder='Height in m' />
            <input value={weight} onChange={e => setWeight(e.target.value)} type="number" placeholder="Weight in Kg" />
            <input value={age} onChange={e => setAge(e.target.value)} type="number" placeholder="Age" />
            <select name="" id="sex">
                <option value="">Sex</option>
                <option value="">Male</option>
                <option value="">Female</option>
            </select>
            {/* <select name="" id="">
                <option value="">Select an activiity Factor</option>
                <option value="">Little or no exercise/ desk job</option>
                <option value="">Light exercise/ sports 1- 3 days/ week</option>
                <option value="">Moderate exercise/ sports 3- 5 days/ week</option>
                <option value="">Heavy exercise/ sports 6 - 7 days/ week</option>
            </select> */}
            <button className="btn-primary flex" onClick={calcBMI}>
                <div className="btn-content">CALCULATE</div><div><i className="fa-solid fa-arrow-right"></i></div>
            </button>
            {result && <div className="results flex">
                <div>YOU ARE {bmi >= 30 ? 'OBESE' : 'underweight'}</div>
                <div>Your BMI is {bmi}</div>
                <i className="fa-solid fa-xmark text-highlighter" onClick={() => setResult(false)}></i>
            </div>}
        </div>
    );
}