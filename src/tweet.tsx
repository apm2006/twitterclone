// Tweet.js
import React, { useState } from 'react';

type TweetProps = {
    id: number;
    username: string;
    content: string;
    likes: number;
    timestamp: string;
}

export const Tweet = ({username, content, likes, timestamp}: TweetProps) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);

    const likeClick = () => {
        setLiked(prev => !prev);
        setLikeCount(prev => liked ? prev - 1 : prev + 1);
    };

    return (
        <div className="tweet">
            <h3>@{username}</h3>
            <p>{content}</p>
            <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                <p>{timestamp}</p>
                <div onClick={likeClick} style={{ cursor: 'pointer'}}>
                    {liked ? '❤️' : '🤍'} {likeCount}
                </div>
            </div>
        </div>
    )
}

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/



export default Tweet;
