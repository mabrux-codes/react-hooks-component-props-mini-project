import React from 'react';

const About = ({ image, about }) => {
    const defaultImage = 'path/to/default/image.jpg'; // Replace with actual default image path

    return (
        <aside>
            <img src={image || defaultImage} alt="About" />
            <p>{about}</p>
        </aside>
    );
};

export default About;