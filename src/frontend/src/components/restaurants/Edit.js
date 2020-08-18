import React, {useState, useContext, useEffect} from 'react'
import {Link, useHistory } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { GlobalContext} from '../../context/GlobalState';

export const Edit = (props) => {

  const [selectedRestaurant, setSeletedRestaurant] = useState({
    id:'',
    rating:0,
    name:'',
    site:'',
    email:'',
    phone:'',
    street:'',
    city: '',
    state: '',
    lat: 0,
    lng: 0
  });
  
  const {restaurants,editRestaurant} = useContext(GlobalContext);
  const history = useHistory();
  const currentRestaurantId = props.match.params.id;

  useEffect(()=>{
    const restaurantId = currentRestaurantId;
    const selectedRestaurant = restaurants.find(restaurant => restaurant.id === restaurantId)
    setSeletedRestaurant(selectedRestaurant)
  },[currentRestaurantId, restaurants])
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    editRestaurant(selectedRestaurant);
    history.push('/');
  }

  const handleChange = (e) => {
    const value = e.target.value;    
    setSeletedRestaurant({...selectedRestaurant,[e.target.name]:value})
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>        

        <Label>Name</Label>
        <Input type="text" name="name" value={selectedRestaurant.name} placeholder="Enter Name" onChange={handleChange}></Input>

        <Label for="selectRating">Rating</Label>
        <Input type="select" name="rating" value={selectedRestaurant.rating} id="selectRating" onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>

        <Label>Site</Label>
        <Input type="text" name="site" value={selectedRestaurant.site} placeholder="Enter url of the restaurant" onChange={handleChange}></Input>

        <Label>Email</Label>
        <Input type="text" name="email" value={selectedRestaurant.email} placeholder="Enter Email" onChange={handleChange}></Input>

        <Label>Phone</Label>
        <Input type="text" name="phone" value={selectedRestaurant.phone} placeholder="Enter Phone" onChange={handleChange}></Input>

        <Label>Street</Label>
        <Input type="text" name="street" value={selectedRestaurant.street} placeholder="Enter Street" onChange={handleChange}></Input>

        <Label>City</Label>
        <Input type="text" name="city" value={selectedRestaurant.city} placeholder="Enter City" onChange={handleChange}></Input>

        <Label>State</Label>
        <Input type="text" name ="state" value={selectedRestaurant.state} placeholder="Enter State" onChange={handleChange}></Input>

        <Label>Lat</Label>
        <Input type="text" name="lat" value={selectedRestaurant.lat} placeholder="Enter Latitude" onChange={handleChange}></Input>

        <Label>Lng</Label>
        <Input type="text" name="lng" value={selectedRestaurant.lng} placeholder="Enter Longitude" onChange={handleChange}></Input>      
        
      </FormGroup>
      <Button type='submit'>Edit Name</Button>
      <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}
