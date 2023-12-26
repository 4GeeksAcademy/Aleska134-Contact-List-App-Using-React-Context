import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	// const addContact = (e,data) => {

		console.log(store.contacts);
		

			// fetch(`https://playground.4geeks.com/apis/fake/contact/`, {
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// 	method: "POST"
				// body:[]
			// 	{
			// 		"full_name": "Dave Bradley 2",
			// 		"email": "dave@gmail.com",
			// 		"agenda_slug": "my_super_agenda",
			// 		"address":"47568 NW 34ST, 33434 FL, USA",
			// 		"phone":"7864445566"
			// }
		// 	{}
		// 	})
		// 	.then(resp => {
		// 		if (resp.status >= 200 && resp.status < 300){
		// 			console.log("El request se hizo bien");
		// 			return (resp.json());
		// 		}else{
		// 			console.log(`Hubo un error ${resp.status} en el request`);

		// 		}
		// 		// se podria continuar aquí
		// 	})
		// 	.then(resp => console.log(resp))
		// 	.catch(error => {
		// 		//manejo de errores
		// 		console.error(error);
		// 	})
		// })


		// }

	return (
		<div className="container">
			<h1>Add new contact</h1>
			<div>
				<form method="POST">
					<div className="mb-3">
						<label className="form-label">Full Name:</label>
						<input type="text" className="form-control" name="full_name" />
					</div>

					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input type="email" className="form-control" name="email" />	
					</div>
					
					<div className="mb-3">
						<label className="form-label">Phone:</label>
						<input type="number" className="form-control" name="phone" />
					</div>

					<div className="mb-3">
						<label className="form-label">Address:</label>
						<input type="text" className="form-control" name="address" />
					</div>
					<br />
					<div className="d-grid">
						<button className="btn btn-primary" type="submit" >Save</button>
					</div>
				</form>
			</div>
			<br />
			<Link to="/">
				<a>Or get back to contacts</a>
			</Link>
		</div>
	);
};
