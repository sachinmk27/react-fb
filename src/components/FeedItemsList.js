import React from 'react';
import FeedItem from "../components/FeedItem";

const FeedItemsList = ({ feedItems}) => (
    <div>
        {feedItems.length > 0 ? feedItems.map(item => 
            <FeedItem 
                key={item.id}
                {...item}
            />
        ): <p>No items to display</p>}
    </div>
)

export default FeedItemsList;