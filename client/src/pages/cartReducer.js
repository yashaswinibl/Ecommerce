// cartReducer.js

const initialState = {
    // Your cart state here...
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CLEAR_CART":
        return {
          ...state,
          // Clear the cart items in your state
          cartItems: [],
        };
      // Other cases and reducers...
      default:
        return state;
    }
  };
  
  export default cartReducer;
  