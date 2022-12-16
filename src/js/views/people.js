import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container card-group bg-dark">
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

			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img src="https://starwars-visualguide.com/assets/img/characters/2.jpg" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">C-3PO</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-between">
            <Link to="#" className="btn btn-secondary">Details</Link>
            <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
          </div>
				</div>
			</div>

      <div className="card border-dark my-3 mx-2 text-bg-dark">
				<img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">R2-D2</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-between">
            <Link to="#" className="btn btn-secondary">Details</Link>
            <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
          </div>
				</div>
			</div>

			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Darth Vader</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-between">
            <Link to="#" className="btn btn-secondary">Details</Link>
            <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
          </div>
				</div>
			</div>

			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img src="https://starwars-visualguide.com/assets/img/characters/5.jpg" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Leia Organa</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-between">
            <Link to="#" className="btn btn-secondary">Details</Link>
            <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
          </div>
				</div>
			</div>


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
		</div>
	);
};
