import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi';
import '../styles/Story.css';

export const Story = (props) => {

    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(props.storyId).then( data => data && data.url && setStory(data))
    }, []);

    return (
        <div>
            <h3 className="story-title">
                <a href={story.url}>{story.title}</a>
            </h3>
            <div>
                <span className="by">By: <b>{story.by}</b></span>
                <span className='at'>At: <b>{new Date(+(story.time)).toLocaleString()}</b></span>
            </div>
        </div>
    );
}