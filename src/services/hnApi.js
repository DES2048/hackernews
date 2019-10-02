import axios from 'axios';
import urljoin from 'url-join';
import {selectFields} from '../utils/selectFields';

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = urljoin(baseUrl, 'newstories.json');
export const storyUrlBase = urljoin(baseUrl, 'item');

export const getStory = async (storyId) => {
    const story = await axios.get(
        urljoin(storyUrlBase, storyId.toString(), '.json')
    ).then(({data}) => data && selectFields(data));

    return story;
}

export const getStoryIds =  async () => {
    const result = await axios.get(
        newStoriesUrl
    ).then(({data}) => data);

    return result;
}

