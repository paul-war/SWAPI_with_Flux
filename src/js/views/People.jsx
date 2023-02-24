import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { CardPeople } from "../views/CardPeople.jsx";


export const People = () => {
	const { store, actions } = useContext(Context);
	// Traemos los personajes del store
	const people = store.people;
    // const selectPeople = store.selectPeople;

	return (
		<div className="container bg-dark mb-3">
            <h1 className="text-light text-center pt-4">Characters</h1>
			<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
				{   people.map((e, i)=>{
                        let card = <CardPeople key= {i} id={i+1} name = {e.name} height = {e.height} birth_year = {e.birth_year} hair_color = {e.hair_color} eye_color = {e.eye_color} />
                        return card;
                    })
                }
			</div>
		</div>
	);
};

{/* 
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul> */}
