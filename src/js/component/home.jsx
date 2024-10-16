import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container ">
				<Navbar />
			</div>


			<div className="container mt-2">

				<div className=" container-fluid py-5 border  ">
					<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
					<p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
					<button className="btn btn-primary btn-lg" type="button">Call to action!</button>
				</div>

				<div className="container row">
					<div className="col">
						<Card title="Tarea" />

					</div>
					<div className="col">
						<Card title="Card title" />
					</div>
					<div className="col">
						<Card title="Card title" />
					</div>
					<div className="col">
						<Card title="Card title" />
					</div>

				</div>

				<div className="container  bg-dark mt-2  d-flex justify-content-center">
					<footer class="expand-lg bg-body-tertiary ">
						<h6 className=" text-white">Copyrigth © Your Website 2024</h6>
					</footer>
				</div >

			</div>


		</>
	);
};

export default Home;
