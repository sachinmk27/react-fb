import React from 'react';
import { connect } from "react-redux";

import { likeItem, unlikeItem } from "../actions";

export const Like = ({dispatch, likes, isLiked, id }) => {

    return (
        <button onClick={
            isLiked ? 
            () => dispatch(unlikeItem(id)) : 
            () => dispatch(likeItem(id))}>
            {isLiked ? `${likes} Liked` : `${likes} Like`}
        </button>
    )
}

export default connect()(Like);