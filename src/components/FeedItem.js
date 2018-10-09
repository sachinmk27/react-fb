import React from 'react';

import AddComment from "./AddComment";
import Like from './Like';

const FeedItem = ({ item_description, image, likes, comments, id, isLiked }) => (
    <div style={{border: '1px solid white'}}>
        {item_description ? <h1>{item_description}</h1> : null}
        {image ? <img style={ {height: 50} }src={image} alt='item'/> : null }
        <Like id={id} isLiked={isLiked} likes={likes}/>

        <ul>
            {comments.map(c => <li key={c.created_at}>{c.comment}</li>)}
        </ul>
        <AddComment/>
    </div>
)

export default FeedItem;