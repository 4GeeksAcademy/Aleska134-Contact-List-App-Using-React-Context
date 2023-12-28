import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useFormContext } from "../store/formContext";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

const Demo = () => {
	const { store, actions } = useContext(Context);
	// const { formData, updateFormData , sendDataToAPI } = useFormContext();
	// console.log(formData)
	// 	const handleSubmit = (e) => {
	// 		e.preventDefault();
	// 		console.log(e.target.name)

	// 	}
	// 	const handleInputChange = (e) => {
	// 		updateFormData({[e.target.name]:e.target.value});
	// 	};

		// console.log(store.contacts);

	return (
		<div className="container">
			<h1>Add new contact</h1>
			<div>
				{/* onSubmit={handleSubmit} onChange={handleInputChange} */}
				<form method="GET">
					<div className="mb-3">
						<label className="form-label">Full Name:</label>
						<input type="text" className="form-control" name="full_name" />
					</div>

					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input type="email" className="form-control" name="email"/>	
					</div>
					
					<div className="mb-3">
						<label className="form-label">Phone:</label>
						<input type="number" className="form-control" name="phone"/>
					</div>

					<div className="mb-3">
						<label className="form-label">Address:</label>
						<input type="text" className="form-control" name="address"/>
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

export default Demo;