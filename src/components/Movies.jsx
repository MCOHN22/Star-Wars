//title, release date, 
//plot, and poster populated in the dom

import React, { Component } from 'react';

class Movies extends Component {
    constructor(){
        super()
    }
    // function to grab user input
     searchMovies = async (event) => {
         event.preventDefault();
         console.log("submitting")
         const query = "Jurassic Park"
        //  variable for our url to live in
        const url  = `https://api.themoviedb.org/3/search/movie?api_key=f5f61add57f604cf9812445951da0a6c&language=en-US&query=${query}&page=1&include_adult=false`
        try{
             // use await to tell our function to wait for data
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.results[0].title)}
            catch(err){
                console.log(err)
            }
    }
    render() {
        return (
            <div>
                <form action="" className="form" onSubmit={this.searchMovies}>
                    <label className="label" htmlFor="query">Movie Title</label>
                    <input type="text" name="query" className="input"/>
                    <button className="button" type="submit">Search</button>
                </form>
            </div>
        );
    }
}
export default Movies;
// form for the user to be able to search
// be able to use the api according to the user search
// display the user info