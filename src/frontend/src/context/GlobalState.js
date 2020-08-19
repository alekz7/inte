import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  restaurants: []
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const getRestaurants = (restaurants) => {
    dispatch({
      type: 'GET_RESTAURANTS',
      payload: restaurants
    })
  }

  const addRestaurant = (restaurant) => {
    dispatch({
      type: 'ADD_RESTAURANT',
      payload: restaurant
    })
  }

  const deleteRestaurant = (id) => {
    dispatch({
      type: 'REMOVE_RESTAURANT',
      payload: id
    })
  }

  const getRestaurant = (id) => {
    dispatch({
      type: 'GET_RESTAURANT',
      payload: id
    })
  }

  const editRestaurant = (restaurant) => {
    dispatch({
      type: 'EDIT_RESTAURANT',
      payload: restaurant
    })
  }

  return(
    <GlobalContext.Provider value={{
      restaurants: state.restaurants,
      getRestaurants,
      addRestaurant,
      deleteRestaurant,
      getRestaurant,
      editRestaurant
    }}>
      {children}
    </GlobalContext.Provider>)
    }