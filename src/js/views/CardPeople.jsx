import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

// people: https://starwars-visualguide.com/assets/img/characters/1.jpg
// planets: https://starwars-visualguide.com/assets/img/planets/1.jpg
// host = "https://starwars-visualguide.com/assets/img/"



export const CardPeople = ({ id, name, height, hair_color, eye_color, birth_year }) => {
    const { store, actions } = useContext(Context);
    const people = store.people;
    const favorites = store.favorites;

    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }


    return (
        <div className="col">
            <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={urlImage} onError={handleOnErrorImg}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Height: {height/100 + " mt"}</p>
                    <p className="card-text">Birth Year: {birth_year} </p>
                    <p className="card-text">Hair Color: {hair_color} </p>
                    <p className="card-text">Eye Color: {eye_color} </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/people/${id}`} className="btn btn-secondary" 
                            onClick={() => actions.getPeople({ id: id, name: name, height: height, eye_color: eye_color, hair_color: hair_color, birth_year: birth_year })}>
                                Details
                        </Link>
                        <Link className="btn btn-outline-warning" 
                            onClick={() => actions.addFavorite({id, name}, favorites)}>
                                <i className="far fa-heart fa-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}