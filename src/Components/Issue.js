import React from 'react'
import Navbar from './Navbar'
import './App.css';
import { useState } from 'react';

export default function Issue() {

    const [selects, setSelects] = useState();

    return (
        <div>
            <Navbar />
            <div className='Text'>
                <p>Issue Your Certificate</p>
            </div>
            <div className='input'>
                <input placeholder='Enter Your Name'></input>
            </div>
            <div className='SelectCourse'>
                <select>
                    <option>Btech</option>
                    <option>Atech</option>
                    <option>Ztech</option>
                </select>
            </div>
            <div className='InstitueName'>
                <select>
                    <option>itm</option>
                    <option>Navrachna</option>
                    <option>Paruk</option>
                </select>
            </div>
            <div>
                <div className='VerifypageB'>
                    <button>Issue</button>
                </div>
            </div>
        </div>
    )
}