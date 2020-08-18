import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';

export const List = () => {
  const {restaurants, deleteRestaurant} = useContext(GlobalContext);  
  return (
    <ListGroup className='mt-4'>      
      {restaurants.length > 0 ? (
        <>
        {restaurants.map(restaurant=>(
          <ListGroupItem className='d-flex' key={restaurant.id}>
            <strong>{restaurant.name}</strong>
            <div className='ml-auto'>
              <Link className='btn btn-warning mr-1' to={`/editRestaurant/${restaurant.id}`}>Edit</Link>
              <Button onClick={()=>deleteRestaurant(restaurant.id)} color='danger'>Delete</Button>
            </div>        
          </ListGroupItem>
        ))}      
        </>
      ) : (<h4 className='text-center'>No hay informacion de restaurantes</h4>)}
      
    </ListGroup>
  )
}
