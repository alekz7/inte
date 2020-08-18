import React, {useState, useContext} from 'react'
import {Link, useHistory } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { GlobalContext} from '../../context/GlobalState';
import {v4 as uuid} from 'uuid';

export const Add = () => {
  
  const [state, setState] = useState({    
    rating:0,
    name:'',
    site:'',
    email:'',
    phone:'',
    street:'',
    city:'',
    state:'',
    lat:0,
    lng:0
  })
  const {addRestaurant} = useContext(GlobalContext);
  const history = useHistory();
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      id:uuid(),
      rating:state.rating,
      name: state.name,
      site: state.site,
      email: state.email,
      phone: state.phone,
      street: state.street,
      city: state.city,
      state: state.state,
      lat: state.lat,
      lng: state.lng
    }
    addRestaurant(newRestaurant);
    history.push('/');
  }

  const handleChange = (e) => {    
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>        

        <Label>Name</Label>
        <Input type="text" name="name" value={state.name} placeholder="Enter Name" onChange={handleChange}></Input>

        <Label for="selectRating">Rating</Label>
        <Input type="select" name="rating" value={state.rating} id="selectRating" onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>

        <Label>Site</Label>
        <Input type="text" name="site" value={state.site} placeholder="Enter url of the restaurant" onChange={handleChange}></Input>

        <Label>Email</Label>
        <Input type="text" name="email" value={state.email} placeholder="Enter Email" onChange={handleChange}></Input>

        <Label>Phone</Label>
        <Input type="text" name="phone" value={state.phone} placeholder="Enter Phone" onChange={handleChange}></Input>

        <Label>Street</Label>
        <Input type="text" name="street" value={state.street} placeholder="Enter Street" onChange={handleChange}></Input>

        <Label>City</Label>
        <Input type="text" name="city" value={state.city} placeholder="Enter City" onChange={handleChange}></Input>

        <Label>State</Label>
        <Input type="text" name ="state" value={state.state} placeholder="Enter State" onChange={handleChange}></Input>

        <Label>Lat</Label>
        <Input type="text" name="lat" value={state.lat} placeholder="Enter Latitude" onChange={handleChange}></Input>

        <Label>Lng</Label>
        <Input type="text" name="lng" value={state.lng} placeholder="Enter Longitude" onChange={handleChange}></Input>      
        
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
    </Form>
  )
}
