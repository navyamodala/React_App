import { Component } from "react";

class Fetch extends Component{
    state = {
        cards: [],
        loader:true,
        error:false,
    };
    fetchproducts=() => {
        fetch("https://fakestoreapi.com/carts")
        
    };
    render() {
        return (
            <>
            </>
        )
}
}