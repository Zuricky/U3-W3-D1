const initialState = {
  favList: {
    content: [],
    createdAt: new Date().toISOString(),
  },
  favorites: {
    content: null,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favList: {
          ...state.favList,
          content: [...state.favList.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favList: {
          ...state.favList,
          content: [...state.favList.content.filter((_, i) => i !== action.payload), action.payload],
        },
      };

    case "SELECT_FAVOURITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
