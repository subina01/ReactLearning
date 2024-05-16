import React,  { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';  
import Contact from './ContactComponent';
import DishDetail from "./DishDetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';

import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component
{
constructor(props)
{
  super(props);
  this.state = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
   //selectedDish: null
  };
}
 /*onDishSelect(dishId){
  this.setState({selectedDish: dishId})
 }*/


render() {
  console.log('Dishes:', this.state.dishes);
  console.log('Promotions:', this.state.promotions);
  console.log('Leaders:', this.state.leaders);
 const HomePage = () => {
  
  return(
    <Home 
    dish = {this.state.dishes[0]}
    promotion = {this.state.promotions[0]}
    leader = {this.state.leaders[0]}
    /*dish={this.state.dishes.filter((dish) => dish.featured[0])}
    promotion={this.state.promotions.filter((promo) => promo.featured[0])}
    leader={this.state.leaders.filter((leader) => leader.featured[0])}*/
    />
  )
 }

 const MenuPage = () => {
  return(
    <Menu dishes = {this.state.dishes}/>
  )
 }

 const ContactUsPage = () => {
  return(
    <Contact/>
  )
 }
  return (
    <div>
      <Header/>
        <Routes>
           <Route path='*'Component={HomePage} />
           <Route path='/home'Component={HomePage} />
           <Route exact path='/menu'Component={MenuPage}/>
           <Route exact path='/contactus' Component={ContactUsPage}/>
          </Routes>
        <Footer/>
    </div>
  );
}
}

export default Main;
/*<Navigate to="/home"/><Route path="/home" component={HomePage}/>*/
  /*<Menu dishes = { this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
      <DishDetail dish= {this.state.dishes.filter((dish) => dish.id  === this.state.selectedDish )[0]} />*/