import React, {useEffect, useState} from 'react';
import {getStoryIds} from '../services/hnApi';
import {Story} from '../components/Story';

export const StoriesContainer = () => {
    
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => {
            setStoryIds(data)
        });
    }, []);



    return storyIds.slice(0,20).map( (storyId) => {
        return <Story key = {storyId} storyId={storyId} />
    });

}