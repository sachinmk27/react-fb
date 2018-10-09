const initialFeedItems = [
  {
    id: 1,
    item_description: "This is a text only item",
    image: "",
    likes: 10,
    isLiked: false,
    comments: [
      {
        comment: "This is a comment",
        created_at: "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
      },
      {
        comment: "This is another comment",
        created_at: "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
      }
    ]
  },
  {
    id: 2,
    item_description: "This is an item with an image",
    image:
      "https://cdn-images-1.medium.com/max/2000/1*xHGUxQGN1XBNdOrhcRFdiA.jpeg",
    likes: 20,
    isLiked: true,
    comments: [
      {
        comment: "This is a comment",
        created_at: "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
      },
      {
        comment: "This is another comment",
        created_at: "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
      }
    ]
  },
  {
    id: 3,
    item_description: "",
    image: "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L5K1I1WsuQMZ8ecEuWg%2Favatar.png?generation=1518623866348435&alt=media",
    likes: 20,
    comments: [
      {
        comment: "This is a comment",
        created_at: "Fri May 11 2018 19:17:43 GMT+0530 (IST)"
      },
      {
        comment: "This is another comment",
        created_at: "Fri May 10 2018 15:23:36 GMT+0530 (IST)"
      }
    ]
  }
];

const feedItems = (state = initialFeedItems, action) => {
  console.log(action, 'in reducer')
  switch (action.type) {
    case "ADD_COMMENT":
      return state.map(item => {
        if (item.id === action.payload.id) {
          let newComment = {
            comment: action.payload.text,
            created_at: new Date()
          }
          return Object.assign({}, item, {
            comments: [...item.comments, newComment]
          });
        }
        return item;
      });
    case "LIKE_ITEM":
      return state.map(item => {
        if (item.id === action.payload.id) {
          return Object.assign({}, item, {
            isLiked: true,
            likes: item.likes + 1
          });
        }
        return item;
      });
    case "UNLIKE_ITEM":
      return state.map(item => {
        if (item.id === action.payload.id) {
          return Object.assign({}, item, {
            isLiked: false,
            likes: item.likes - 1
          });
        }
        return item;
      });
    default:
      return state;
  }
};

export default feedItems;
