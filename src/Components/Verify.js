import React from 'react'
import Navbar from './Navbar'
import './App.css';
import { Link } from 'react-router-dom';

export default function Verify() {
    return (
        <div>
            <Navbar />
            <div className='Text'>
                <p>Verify Your Certificate</p>
            </div>
            <div className='input'>
                <input placeholder='Enter Your Number'></input>
            </div>
            <div className='CertificateButton'>
                <Link to="/Certificate">
                    <button>Verify</button>
                </Link>
            </div>
        </div>
    )
}
