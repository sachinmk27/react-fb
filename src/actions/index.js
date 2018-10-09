export const setTestSelector = selector => ({
  type: "SET_TEST_SELECTOR",
  selector
});

export const TestSelectors = {
  TEXT_ONLY: "TEXT_ONLY",
  IMAGES_ONLY: "IMAGES_ONLY",
  IMAGE_AND_TEXT: "IMAGE_AND_TEXT",
  NO_ITEMS: "NO_ITEMS"
};


export const addComment = (id, text) => ({
    type: 'ADD_COMMENT',
    payload: {
        id,
        text
    }
});

export const likeItem = (id) => ({
    type: 'LIKE_ITEM',
    payload: {
        id
    }
});

export const unlikeItem = (id) => ({
    type: 'UNLIKE_ITEM',
    payload: {
        id
    }
})