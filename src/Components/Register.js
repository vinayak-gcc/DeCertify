import React from 'react'
import Navbar from './Navbar'
import './App.css';
import { useState } from 'react';

export default function Register() {

    const [selects, setSelects] = useState();

    return (
        <>
            <Navbar />
            <div className='Text'>
                <p>Register Your Certificate</p>
            </div>
            <div className='input'>
                <input placeholder='Institute Name'></input>
            </div>
            <div className='AddCourse'>
                <select placeholder='AddCourse'>
                    <option>Btech</option>
                    <option>Atech</option>
                    <option>Ztech</option>
                </select>
            </div>
            <div>
                <input placeholder="Institute Address"></input>
            </div>
            <div>
                <div className='VerifypageB'>
                    <button>Register</button>
                </div>
            </div>
        </>
    )
}