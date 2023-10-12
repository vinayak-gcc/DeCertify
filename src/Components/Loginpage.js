import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Loginpage() {
    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: "#242424" }}>
                <div className='text'>
                    Your Blockchain Powered
                    Certificate Ecosystem
                    <p>Verify Issue</p>
                </div>

                <div className='Container2'>
                    <div className='Issue'>
                        <Link to="/Issue"> <button>Issue Certificate</button></Link>
                    </div>
                    <div className='Verify'>
                        <Link to="/Verify"><button>Verify Certificate</button></Link>
                    </div>

                    <div className='register'>
                        <Link to="/Register"> <h4 >New here.Register your Institute now</h4></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

