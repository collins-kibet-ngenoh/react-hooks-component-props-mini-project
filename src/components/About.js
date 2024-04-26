//About.js
import React from 'react';

function About({ image = "https://via.placeholder.com/215", about }) { // Updated prop name to "about"
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p> {/* Updated prop name */}
        </aside>
    )
}

export default About;