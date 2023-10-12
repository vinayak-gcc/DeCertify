import React from 'react'
import Navbar from './Navbar'

export default function Certificate() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='Certificate'>
                <p >Certificate</p>
            </div>

            <div className='StudentName'>
                <p>Student Name</p>
                <p>Nandan pathak</p>
            </div>

            <div className='CourseName'>
                <p>Course Name</p>
                <p>Computer Science</p>
            </div>

            <div className='InstituteName'>
                <p>Institute Name</p>
                <p>ITMBU</p>
            </div>
        </>
    )
}
