import React, { useState, useEffect } from 'react'

const Seconds = () => {
    const dateObject = new Date();
    const currentdate = dateObject.toUTCString();

    return (
        <div>
            <h2 style={{ color: '#ce1159' }}>TRAFFIC SIGNAL</h2>
            <h3 style={{ color: '#2b88b6' }}>{currentdate}</h3>
        </div>
    )
}

export default Seconds