import React from 'react';
import './CarRental.css'


 const CardView =(props) => {
  
  
  return(
    <div className="CardView" >
      <p className = "bold" >Title: {props.title} </p>
      <p>Description: {props.description} </p>

      {props.showHistory?
      <p>Number of car rentals:{props.rentals}</p> 
      :null}

      <p>Image: {props.image} </p>
      <img className="" src = {props.imageSource}/>
      
    </div>
  )}
  




export default CardView;