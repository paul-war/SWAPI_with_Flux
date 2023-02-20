import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container bg-dark mb-3">
      <h1 className="text-light text-center pt-4">People</h1>
      <h2 className="text-light text-center pt-4">Under Construction</h2>
			<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
        <div className="col">
          <div className="card border-dark my-3 mx-2 text-bg-dark">
            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Luke Skywalker</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="d-flex justify-content-between">
                <Link to="#" className="btn btn-secondary">Details</Link>
                <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
              </div>
            </div>
          </div>
  			</div>
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
