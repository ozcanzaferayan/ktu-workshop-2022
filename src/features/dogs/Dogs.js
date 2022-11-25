// @ts-nocheck
import React, { useEffect, useState } from 'react';

const Dogs = () => {
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3004/dogs')
            .then((res) => res.json())
            .then((data) => setDogs(data));
    }, []);

    return dogs.map((post) => (
        <div key={post.id} style={styles.container}>
            <img src={post.image} alt={post.title} style={styles.image} />
        </div>
    ));
};

const styles = {
    container: {
        display: 'inline',
        flexDirection: 'column',
    },
    image: {
        width: '300px',
    },
};

export default Dogs;
