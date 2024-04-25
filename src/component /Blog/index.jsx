import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://65fdecb0b2a18489b38599dc.mockapi.io/posts');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <section className="title-section">
                <h1>my <span> blogs</span></h1>
                <span className="title-bg">Post</span>
            </section>
            <div className="blogFlex">
            {Array.isArray(data) && data.map(item => (
                <div key={item.id} className="card">
                    <img src={item.imageUrl} alt={item.title} style={{width: '300px', height: '200px'}}/>
                    <div>
                        <h2>{item.title}</h2>
                        {item.description && (
                            <p>{item.description.split('.')[0]}.</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};


export default Blog;