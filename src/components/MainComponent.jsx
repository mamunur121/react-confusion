import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from "../shared/dishes";
import Menu from './MenuComponent';
import DishDetails from './DishDetails';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
    }

    onDishSelect = dishId => {
        this.setState({selectedDish: dishId});
    };

    render() {
        return (
            <div className="App">
                <Navbar color='light'>
                    <div className='container'>
                        <NavbarBrand href='/'> Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu
                    dishes={this.state.dishes}
                    onClick={(dishId)=> this.onDishSelect(dishId)}
                />
                <DishDetails
                    dish={this.state.dishes.filter(dish=> dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}

export default Main;
