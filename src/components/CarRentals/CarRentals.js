import React, { Component } from 'react';
import CardView from './CarRental/CarRental' ;
import './CarRentals.css';
import { Link } from 'react-router-dom';
import Toolbar from '../Toolbar/Toolbar';





class CarRentals extends Component {
  
  state = {
    cars: [
      { title: 'Mercedes', description: 'C-Class', rentals: 5, imageSource:''},
      { title: 'Mercedes', description: 'E-Class', rentals: 26, imageSource:'' },
      { title: 'Mercedes', description: 'S-Class', rentals: 17,  imageSource:'' },
      { title: 'BMW', description: '5-Series', rentals: 8,  imageSource:'' },
      { title: 'BMW', description: '3-Series', rentals: 35,  imageSource:'' },
      { title: 'BMW', description: '7-Series', rentals: 27,  imageSource:'' },
      { title: 'VOLO', description: 'jukie', rentals: 11,  imageSource:'' },
      { title: 'VOLO', description: 'Transportor', rentals: 20,  imageSource:'' },

    ],
    
    showCarRental: true
  }

  toggleHandler = () => {
    const doesShow = this.state.showCarRental;
    this.setState( { showCarRental: !doesShow } );
  }

render(){
 
  let cars = null;
  let BtnClass = ["Button"];
  

  
    cars = (
      <div>
        {this.state.cars.map((car,i) => { 

          return <Link to={'/' + i} key={`some-person-${i}`}>
          <CardView 
          showHistory = {this.state.showCarRental} 
          
          title={car.title} 
          rentals= {car.rentals}   
          imageSource={car.imageSource} 
          
           />
           </Link>
        })
      }  
        </div>
    )
  

  return (
    <div className="App">
      <Toolbar/>
      <p className=""> Card View </p>
      <p>Press this button to hide number of car rentals </p>

      <button className={BtnClass.join('')} onClick={this.toggleHandler} > Click </button> 

      {cars}

    </div>
  

    );
  }
}



export default CarRentals;

