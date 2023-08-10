export const addPostActionCreator = (text) => ({ type: "ADD-POST" });
export const updateNewPostTextActionCreator = (text) => ({
    type: "UPDATE-NEW-POST-TEXT",
    message: text,
});

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "hi, its me" },
        {
            id: 2,
            message: "my name is Cat",
            img: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
        }],
    newPostText: ''
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts[state.posts.length - 1].id + 1,
                    message: state.newPostText
                }],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.message
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default ProfileReducer;