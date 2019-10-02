import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi';
import 
    {StoryWrapper, 
    StoryTitle,
    StoryMeta,
    StoryMetaElement} from '../styles/StoryStyle';

export const Story = (props) => {

    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(props.storyId).then( data => data && data.url && setStory(data))
    }, []);

    return (
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>

            <StoryMeta>
                <span data-testid="story-by">
                    <StoryMetaElement color="#000">By: </StoryMetaElement>{story.by}
                </span>
                <span data-testid="story-time">
                    <StoryMetaElement color="#000">Posted: </StoryMetaElement>{story.time}
                </span>
            </StoryMeta>
        </StoryWrapper>
    );
}