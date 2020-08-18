export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(restaurant => {
          return restaurant.id !== action.payload;
        })
      }
    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: [action.payload, ...state.restaurants]
      }
    case 'EDIT_RESTAURANT':
      const updateRestaurant = action.payload;

      const updateRestaurants = state.restaurants.map(restaurant => {
        if (restaurant.id === updateRestaurant.id) {
          return updateRestaurant;
        }
        return restaurant;
      })
      return {
        ...state,
        restaurants: updateRestaurants
      }

    default:
      return state;
  }
}