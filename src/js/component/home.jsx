import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="d-flex gap-2 mt-2 flex-wrap justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer/>
		</div>

	);
};

export default Home;
