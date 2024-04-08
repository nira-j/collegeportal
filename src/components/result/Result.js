import React from 'react';
import './result.css';

const Result=()=>{
    return(
        <>
            <div className='container'>
                <table id="basicdetails" class="table table-bordered table-sm">
                    <thead>
                        <img src="" alt="univ logo" />
                        <span>PRSU</span>

                    </thead>
                    <tbody>
                        <tr><td className='key'>Roll Number</td><td className='value'>123</td><td className='key'>Enroll No.</td><td className='value'>445</td><td className='key'>Status</td><td className='value'>Regular</td></tr>
                        <tr><td className='key'>Name</td><td className='value' colSpan={5}>abc</td></tr>
                        <tr><td className='key'>Father/Husband Name</td><td className='value' colSpan={5}>abc</td></tr>
                        <tr><td className='key'>Mother Name</td><td className='value' colSpan={5}>abc</td></tr>
                        <tr><td className='key'>College Name</td><td className='value' colSpan={5}>abc</td></tr>
                        <tr><td className='key'>Centre Name</td><td className='value' colSpan={5}>abc</td></tr>
                    </tbody>
                </table>

                <table className='table table-borderd'>
                    <thead>
                        <tr></tr>
                        <tr></tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

            </div>
        </>
    );
}

export default Result;